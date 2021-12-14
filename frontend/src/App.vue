<template>
  <div id="main">
      <!-- Main Content -->
      <main class="container-fluid">
        <div class="row">
          <!-- Sidebar with search bar -->
          <sidebar class="sidebar-sticky col-sm-4 col-md-3 bg-light pt-3">
            <label class="font-weight-bold" for="inputCity" id="inputCityLabel">Search for a City:</label>
            
              <div class="form-group">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="inputCity" placeholder="Enter a city.." v-model.trim="cityInputVal" @keyup.enter="handleSearch">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="citySearch" @click="handleSearch"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
           
            <p class="font-weight-bold text-primary mt-3 mb-1">Popular Cities:</p>
            <div class="list-group-1">
              <button v-for="city in mostPopularCities" @click="getCurrentWeather(city.name)" type="button" class="list-group-item list-group-item-action" v-bind:key="city.name">{{ city.name }}</button>
            </div>
          </sidebar>

          <!-- Section holding the output of weather data -->
          <content class="col-sm-8 col-md-9">
            <div id="weatherContent" class="pt-3">
              <div class="card w-100">
                <div class="card-body py-2">
                  <h3 class="card-title font-weight-bold mb-0">{{ formatedDate }}<img :src="weatherIcon" id="icon" alt="Weather Icon" /></h3>
                  <div class="card-text mt-0">
                    <p>Temperature: <span id="temp">{{ currentTemp }}</span></p>
                    <p>Humidity: <span id="humidity">{{ currentHumidity }}</span></p>
                    <p>Wind Speed: <span id="windSpeed">{{ currentWindSpeed }}</span></p>
                    <p>UV Index: <span id="uvIndex" :class="uvIndexClass">{{ currentUVInd }}</span></p>
                  </div>
                </div>
              </div>

              <!-- Section of 5 day forecast -->
              <section class="container-fluid" id="forecastSection">
                <h3 class="font-weight-bold my-4">5-Day Forecast:</h3>
                <div class="row text-center" id="forecastRow"></div>
                <!-- Forecast 1 -->
                <div class="col-20">
                  <div class="forecast-container bg-primary text-white mb-4">
                    <h5 class="date-title font-weight-bold"></h5>
                    <img id="forecastIcon" alt="Weather Forecast Icon">
                    <p class="font-weight-bold">Temperature: <span id="tempForecast" class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Humidity: <span id="humidityForecast" class="font-weight-normal"></span></p>
                  </div>
                </div>

              </section>
            </div>
          </content>

        </div>
      </main>
  </div>  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  },
  data(){

    return {      

      // openWeatherQueryUrl: "https://api.openweathermap.org/data/2.5/",
      // apiKey: "cce801f5223df23bb3369079c0a9d97e",

      rawWeatherData: '', // raw response from weather api
      cityInputVal: "",
      uvIndexClass: "",

      mostPopularCities: [
        {name: "New York City"},
        {name: "London"},
        {name: "Singapore"},
        {name: "Los Angeles"},
        {name: "Hong Kong"},
        {name: "Tokyo"},
      ],

      currentDate : new Date(),
      currentCityName: 'Dhaka',
      formatedDate : '',
      currentTemp: '',
      currentHumidity: '',
      currentWindSpeed: '',
      currentUVInd: '',
      forecastData: []
    }
  },
  methods: {

    // Elements part of the sidebar

    // The load event is fired when the window has loaded
    initializeDashboard() {
      
      this.getCurrentWeather(this.currentCityName);

      this.getForecast(this.currentCityName);
      
    },

    handleSearch() {

      var cityInput = this.cityInputVal;

      if (!cityInput) {
        // alert empty input error to user
        alert("You must enter a valid city name");
        return;

      } else {
        this.getCurrentWeather(cityInput);
        this.getForecast(cityInput);
        this.cityInputVal = "";
      }
    },

    getTodaysDate: function(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      return [month, day, year].join("/");
    },

    formatDate: function(date) {
      var year = date.split("-")[0];
      var month = date.split("-")[1];
      var day = date.split("-")[2];
      // to get rid of the 0 in front of the month or day if it exists
      if (month.charAt(0) === "0") {
        month = month.slice(1);
      }
      if (day.charAt(0) === "0") {
        day = day.slice(1);
      }
      return [month, day, year].join("/");
    },

    getCurrentWeather: async function(cityName) {
      

      var url = 'http://localhost:8000/api/?resource=weather&city_name=' + cityName;

      var axios = require('axios'); // for handling weather api promise
      await axios.get(url)
      .then(response => {
          return response.data
        })
        .then(data => {

          console.log(data);

          this.rawWeatherData = data.data;

          this.displayCurrentWeather(this.rawWeatherData);

          this.currentCityName = cityName;

        })
        .catch(function (error) {

          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            alert(error.response.data.message);
        
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            
          }

      });

    },

    // This function uses the API to grap the current UV index of the input city
    getUVIndex: async function(lat, lon) {
      
      this.uvIndexQueryUrl = 'http://localhost:8000/api/?resource=uvi&lat=' + lat + 
        '&lon=' + lon
      
      var axios = require('axios'); // for handling weather api promise
      await axios.get(this.uvIndexQueryUrl)
      .then(response => {
          return response.data
      })
      .then(uvData => {

        console.log(uvData);

        var uvIndex = uvData.data.value;
        let colorClass = ""

        // change color to indicate whether the uv conditions are favorable, moderate, or severe
        if (uvIndex <= 2) {
          colorClass = "green";
        } else if (uvIndex <= 5) {
          colorClass = "yellow";
        } else if (uvIndex <= 7) {
          colorClass = "orange";
        } else if (uvIndex <= 10) {
          colorClass = "red";
        } else if (uvIndex > 10) {
          colorClass = "violet";
        }

        this.uvIndexClass = colorClass;
        this.currentUVInd = uvIndex;

      })
      .catch(function (error) {

          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }

      });

    },

    // This function gets the 5 day forecast for the input city. It includes weather data every 3 hours.
    getForecast: function(cityName) {
      // For temperature in Fahrenheit and wind speed in miles/hour use units=imperial
      var url = "forecast?q=" +
        cityName +
        "&units=imperial";

      fetch(url)
        // First we need to check that the response status is 200 before parsing the response as JSON.
        .then(function (response) {
          if (!response.ok) {
            console.log("There is an issue. Status Code: " + response.status);
            return;
          } else {
            return response.json(); // we only get here if there is no error
          }
        })
        .then(function (forecastData) {
          alert('sdfoweif')
          console.log("Here is the object containing the forcast data");
          console.log(forecastData);
          // define forecastObject variable multiple times and have different property values each iteration of the loop.
          // declarare empty array
          var ourForecastObject = [];
          // iterate throughout the returned object to make an array of objects called "forecastObject" that contains only the data we want to append to the page
          for (let i = 0; i < forecastData.list.length; i++) {
            // if array iteration is divisible by 8
            if (i % 8 === 0) {
              // we will push data to object
              ourForecastObject.push({
                date: forecastData.list[i].dt_txt.split(" ")[0],
                icon: forecastData.list[i].weather[0].icon,
                iconAlt: forecastData.list[i].weather[0].description,
                temp: forecastData.list[i].main.temp,
                humidity: forecastData.list[i].main.humidity,
              });
            }
          }
          // iterate throughout "ourForecastObject" to print the forcast to the webpage
          for (let i = 0; i < ourForecastObject.length; i++) {
            var dateTitle = document.querySelectorAll(".date-title");
            var iconEl = document.querySelectorAll("#forecastIcon");
            var tempSpan = document.querySelectorAll("#tempForecast");
            var humiditySpan = document.querySelectorAll("#humidityForecast");

            dateTitle[i].textContent = this.formatDate(ourForecastObject[i].date);
            iconEl[i].setAttribute(
              "src",
              "https://openweathermap.org/img/wn/" +
                ourForecastObject[i].icon +
                "@2x.png"
            );
            iconEl[i].setAttribute("alt", ourForecastObject[i].iconAlt);
            tempSpan[i].textContent = ourForecastObject[i].temp + " °F";
            humiditySpan[i].textContent = ourForecastObject[i].humidity + "%";
          }

          console.log(ourForecastObject);
          console.log("------------------------------------------------");
        })
        .catch(function (error) {
          console.log("There is an error: " + error);
        });
    },

    getFiveDayForecast: async function(){
      
      var url = 'http://localhost:8000/api/forecast/?city_name=' + cityName;

      var axios = require('axios'); // for handling weather api promise
      await axios.get(url)
      .then(response => {
          return response.data
        })
        .then(data => {

          console.log(data);

          this.forecastData = data.data;

        })
        .catch(function (error) {

          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            alert(error.response.data.message);
        
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            
          }

      });

    },

    displayCurrentWeather: function(resultObj) {
      console.log(resultObj);
      // show City name, date, and corresponding weather icon
      this.formatedDate = this.currentCityName + " (" + this.getTodaysDate(this.currentDate) + ") ";

      // setting src and alt attribute of image
      this.weatherIcon = "https://openweathermap.org/img/wn/" + resultObj.weather[0].icon + "@2x.png";
 
      // Adding temperature information if temperature data exists
      if (resultObj.main.temp) {
        this.currentTemp = resultObj.main.temp + " °F";
      } else {
        this.currentTemp = "No temperature for this city.";
      }

      // Adding humidity information if humidity data exists
      if (resultObj.main.humidity) {
        this.currentHumidity = resultObj.main.humidity + "%";
      } else {
        this.currentHumidity = "No humidity for this city.";
      }

      // Adding wind speed information if wind speed data exists
      if (resultObj.wind.speed) {
        // this.currentWindSpeed = resultObj.wind.speed + " MPH";
        this.currentWindSpeed = " MPH";
      } else {
        this.currentWindSpeed = "No wind speed for this city.";
      }

      // Adding uv index data if exists
      if (resultObj.coord.lat && resultObj.coord.lon) {
        var lat = resultObj.coord.lat;
        var lon = resultObj.coord.lon;
        this.getUVIndex(lat, lon);
      } else {
        this.currentUVInd = "No UV index for this city.";
      }
    },

  },
  mounted: async function() {

    this.initializeDashboard();

  }
}
</script>

<style>
    body {
      font-size: 0.875rem;
    }
    .hide {
      display: none;
    }
    
    .card-header {
      display: flex;
    }
    .card-text p {
      font-weight: bold;
    }
    .card-text span {
      font-weight: normal;
    }
    
    /* Colors for uv index */
    #uvIndex {
      margin: 5px;
      padding: 8px;
      border-radius: 5px;
      color: white;
    }
    .violet {
      background: #80659c;
    }
    .red {
      background: #d85332;
    }
    .orange {
      background: #e48237;
    }
    .yellow {
      background: #ecbd3b;
    }
    .green {
      background: #259f54;
    }
    .col-20 {
      width: 20%;
      float: left;
    }
    
    .col-20 .forecast-container {
      width: 96%;
      margin-bottom: 10px;
      border-radius: 5px;
      padding: 13px;
    }
    .col-20 h5 {
      font-size: 16px;
    }
    
    .col-20 p {
      font-size: 13px;
    }
    
    /* Extra small devices (phones, 576px and down) */
    @media only screen and (max-width: 576px) {
      .col-20 {
        width: 50%;
      }
    }
    
    /* Small devices (landscape phones, 576px and up) */
    @media only screen and (min-width: 576px) {
      .col-20 {
        width: 33.33%;
      }
    }
    
    /* Medium devices (tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      .col-20 {
        width: 20%;
      }
    }
    
    /* Large devices (desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      .col-20 {
        width: 20%;
      }
    }
    
    /* Extra large devices (large desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      .col-20 {
        width: 20%;
      }
    }
    
  </style>
