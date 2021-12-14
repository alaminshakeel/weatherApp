(function(t){function e(e){for(var r,i,o=e[0],s=e[1],l=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={index:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0788":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b0c0"),{id:"main"}),a={class:"container-fluid"},i={class:"row"},o=Object(r["d"])("label",{class:"font-weight-bold",for:"inputCity",id:"inputCityLabel"},"Search for a City:",-1),s={class:"form-group"},l={class:"input-group mb-3"},d={class:"input-group-append"},u=Object(r["d"])("i",{class:"fa fa-search"},null,-1),p=[u],h=Object(r["d"])("p",{class:"font-weight-bold text-primary mt-3 mb-1"},"Popular Cities:",-1),b={class:"list-group-1"},m=["onClick"],f={id:"weatherContent",class:"pt-3"},g={class:"card w-100"},j={class:"card-body py-2"},O={class:"card-title font-weight-bold mb-0"},y=["src"],w={class:"card-text mt-0"},v=Object(r["e"])("Temperature: "),x={id:"temp"},I=Object(r["e"])("Humidity: "),C={id:"humidity"},S=Object(r["e"])("Wind Speed: "),F={id:"windSpeed"},W=Object(r["e"])("UV Index: "),k=Object(r["d"])("section",{class:"container-fluid",id:"forecastSection"},[Object(r["d"])("h3",{class:"font-weight-bold my-4"},"5-Day Forecast:"),Object(r["d"])("div",{class:"row text-center",id:"forecastRow"}),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])]),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])]),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])]),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])]),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])])],-1);function D(t,e,n,u,D,T){var U=Object(r["j"])("sidebar"),V=Object(r["j"])("content");return Object(r["h"])(),Object(r["c"])("div",c,[Object(r["d"])("main",a,[Object(r["d"])("div",i,[Object(r["f"])(U,{class:"sidebar-sticky col-sm-4 col-md-3 bg-light pt-3"},{default:Object(r["m"])((function(){return[o,Object(r["d"])("div",s,[Object(r["d"])("div",l,[Object(r["n"])(Object(r["d"])("input",{type:"text",class:"form-control",id:"inputCity",placeholder:"Enter a city..","onUpdate:modelValue":e[0]||(e[0]=function(t){return D.cityInputVal=t}),onKeyup:e[1]||(e[1]=Object(r["o"])((function(){return T.handleSearch&&T.handleSearch.apply(T,arguments)}),["enter"]))},null,544),[[r["l"],D.cityInputVal,void 0,{trim:!0}]]),Object(r["d"])("div",d,[Object(r["d"])("button",{class:"btn btn-primary",type:"button",id:"citySearch",onClick:e[2]||(e[2]=function(){return T.handleSearch&&T.handleSearch.apply(T,arguments)})},p)])])]),h,Object(r["d"])("div",b,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(D.mostPopularCities,(function(t){return Object(r["h"])(),Object(r["c"])("button",{onClick:function(e){return T.getCurrentWeather(t.name)},type:"button",class:"list-group-item list-group-item-action",key:t.name},Object(r["k"])(t.name),9,m)})),128))])]})),_:1}),Object(r["f"])(V,{class:"col-sm-8 col-md-9"},{default:Object(r["m"])((function(){return[Object(r["d"])("div",f,[Object(r["d"])("div",g,[Object(r["d"])("div",j,[Object(r["d"])("h3",O,[Object(r["e"])(Object(r["k"])(D.formatedDate),1),Object(r["d"])("img",{src:t.weatherIcon,id:"icon",alt:"Weather Icon"},null,8,y)]),Object(r["d"])("div",w,[Object(r["d"])("p",null,[v,Object(r["d"])("span",x,Object(r["k"])(D.currentTemp),1)]),Object(r["d"])("p",null,[I,Object(r["d"])("span",C,Object(r["k"])(D.currentHumidity),1)]),Object(r["d"])("p",null,[S,Object(r["d"])("span",F,Object(r["k"])(D.currentWindSpeed),1)]),Object(r["d"])("p",null,[W,Object(r["d"])("span",{id:"uvIndex",class:Object(r["g"])(D.uvIndexClass)},Object(r["k"])(D.currentUVInd),3)])])])]),k])]})),_:1})])])])}var T=n("1da1"),U=(n("96cf"),n("a15b"),n("ac1f"),n("1276"),n("fb6a"),n("d3b7"),n("a4d3"),n("e01a"),{name:"App",components:{},data:function(){return{searchFormEl:"",cityInputVal:"",searchBtn:"",popularCityListGroupEl:".list-group-1",usersCityListGroupEl:".list-group-2",weatherContentDiv:"",cardDivEl:"",cardTitleEl:"",weatherIconEl:"",uvIndexEl:"",uvIndexClass:"",openWeatherQueryUrl:"https://api.openweathermap.org/data/2.5/",apiKey:"cce801f5223df23bb3369079c0a9d97e",existingEntries:JSON.parse(localStorage.getItem("cities")),rawWeatherData:"",mostPopularCities:[{name:"New York City"},{name:"London"},{name:"Singapore"},{name:"Los Angeles"},{name:"Hong Kong"},{name:"Tokyo"}],currentDate:new Date,currentCityName:"Dhaka",formatedDate:"",currentTemp:"",currentHumidity:"",currentWindSpeed:"",currentUVInd:""}},methods:{initializeDashboard:function(){null!==localStorage.getItem("cities")&&(this.existingEntries=localStorage.getItem("cities")),this.getCurrentWeather(this.currentCityName)},handleSearch:function(){var t=this.cityInputVal;t?(this.getCurrentWeather(t),this.cityInputVal=""):alert("You must enter a valid city name")},getTodaysDate:function(t){var e=new Date(t),n=""+(e.getMonth()+1),r=""+e.getDate(),c=e.getFullYear();return[n,r,c].join("/")},formatDate:function(t){var e=t.split("-")[0],n=t.split("-")[1],r=t.split("-")[2];return"0"===n.charAt(0)&&(n=n.slice(1)),"0"===r.charAt(0)&&(r=r.slice(1)),[n,r,e].join("/")},getCurrentWeather:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(e){var r,c,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.currentCityName=e,r="http://localhost:8000/api/?city_name="+e,c=n("bc3a"),t.next=5,c.get(r).then((function(t){return t.data})).then((function(t){console.log(t),a.rawWeatherData=t,a.displayCurrentWeather(a.rawWeatherData)})).catch((function(t){t.response?(console.log(t.response.data),alert(t.response.data.message),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getUVIndex:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(e,r){var c,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.uvIndexQueryUrl=this.openWeatherQueryUrl+"uvi?lat="+e+"&lon="+r+"&appid="+this.apiKey,c=n("bc3a"),t.next=4,c.get(this.uvIndexQueryUrl).then((function(t){return t.data})).then((function(t){console.log(t);var e=t.value,n="";e<=2?n="green":e<=5?n="yellow":e<=7?n="orange":e<=10?n="red":e>10&&(n="violet"),a.uvIndexClass=n,a.currentUVInd=e})).catch((function(t){t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),getForecast:function(t){var e=this.openWeatherQueryUrl+"forecast?q="+t+"&appid="+this.apiKey+"&units=imperial";fetch(e).then((function(t){return t.ok?t.json():void console.log("There is an issue. Status Code: "+t.status)})).then((function(t){console.log("Here is the object containing the forcast data"),console.log(t);for(var e=[],n=0;n<t.list.length;n++)n%8===0&&e.push({date:t.list[n].dt_txt.split(" ")[0],icon:t.list[n].weather[0].icon,iconAlt:t.list[n].weather[0].description,temp:t.list[n].main.temp,humidity:t.list[n].main.humidity});for(var r=0;r<e.length;r++){var c=document.querySelectorAll(".date-title"),a=document.querySelectorAll("#forecastIcon"),i=document.querySelectorAll("#tempForecast"),o=document.querySelectorAll("#humidityForecast");c[r].textContent=this.formatDate(e[r].date),a[r].setAttribute("src","https://openweathermap.org/img/wn/"+e[r].icon+"@2x.png"),a[r].setAttribute("alt",e[r].iconAlt),i[r].textContent=e[r].temp+" °F",o[r].textContent=e[r].humidity+"%"}console.log(e),console.log("------------------------------------------------")})).catch((function(t){console.log("There is an error: "+t)}))},displayCurrentWeather:function(t){if(console.log(t),this.formatedDate=this.currentCityName+" ("+this.getTodaysDate(this.currentDate)+") ",this.weatherIcon="https://openweathermap.org/img/wn/"+t.weather[0].icon+"@2x.png",t.main.temp?this.currentTemp=t.main.temp+" °F":this.currentTemp="No temperature for this city.",t.main.humidity?this.currentHumidity=t.main.humidity+"%":this.currentHumidity="No humidity for this city.",t.wind.speed?this.currentWindSpeed=" MPH":this.currentWindSpeed="No wind speed for this city.",t.coord.lat&&t.coord.lon){var e=t.coord.lat,n=t.coord.lon;this.getUVIndex(e,n)}else this.currentUVInd="No UV index for this city."}},mounted:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.initializeDashboard();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),V=(n("9765"),n("6b0d")),H=n.n(V);const A=H()(U,[["render",D]]);var E=A;Object(r["b"])(E).mount("#app")},9765:function(t,e,n){"use strict";n("0788")}});
//# sourceMappingURL=index.0e9d5305.js.map