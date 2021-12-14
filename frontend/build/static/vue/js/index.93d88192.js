(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={index:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("b0c0"),{id:"main"}),o={class:"container-fluid"},c={class:"row"},i=Object(r["d"])("label",{class:"font-weight-bold",for:"inputCity",id:"inputCityLabel"},"Search for a City:",-1),s={class:"form-group"},l={class:"input-group mb-3"},u={class:"input-group-append"},d=Object(r["d"])("i",{class:"fa fa-search"},null,-1),p=[d],h=Object(r["d"])("p",{class:"font-weight-bold text-primary mt-3 mb-1"},"Popular Cities:",-1),b={class:"list-group-1"},m=["onClick"],f={id:"weatherContent",class:"pt-3"},g={class:"card w-100"},y={class:"card-body py-2"},j={class:"card-title font-weight-bold mb-0"},O=["src"],v={class:"card-text mt-0"},w=Object(r["e"])("Temperature: "),x={id:"temp"},C=Object(r["e"])("Humidity: "),I={id:"humidity"},S=Object(r["e"])("Wind Speed: "),k={id:"windSpeed"},D=Object(r["e"])("UV Index: "),W=Object(r["d"])("section",{class:"container-fluid",id:"forecastSection"},[Object(r["d"])("h3",{class:"font-weight-bold my-4"},"5-Day Forecast:"),Object(r["d"])("div",{class:"row text-center",id:"forecastRow"}),Object(r["d"])("div",{class:"col-20"},[Object(r["d"])("div",{class:"forecast-container bg-primary text-white mb-4"},[Object(r["d"])("h5",{class:"date-title font-weight-bold"}),Object(r["d"])("img",{id:"forecastIcon",alt:"Weather Forecast Icon"}),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Temperature: "),Object(r["d"])("span",{id:"tempForecast",class:"font-weight-normal"})]),Object(r["d"])("p",{class:"font-weight-bold"},[Object(r["e"])("Humidity: "),Object(r["d"])("span",{id:"humidityForecast",class:"font-weight-normal"})])])])],-1);function T(e,t,n,d,T,V){var U=Object(r["j"])("sidebar"),A=Object(r["j"])("content");return Object(r["h"])(),Object(r["c"])("div",a,[Object(r["d"])("main",o,[Object(r["d"])("div",c,[Object(r["f"])(U,{class:"sidebar-sticky col-sm-4 col-md-3 bg-light pt-3"},{default:Object(r["m"])((function(){return[i,Object(r["d"])("div",s,[Object(r["d"])("div",l,[Object(r["n"])(Object(r["d"])("input",{type:"text",class:"form-control",id:"inputCity",placeholder:"Enter a city..","onUpdate:modelValue":t[0]||(t[0]=function(e){return T.cityInputVal=e}),onKeyup:t[1]||(t[1]=Object(r["o"])((function(){return V.handleSearch&&V.handleSearch.apply(V,arguments)}),["enter"]))},null,544),[[r["l"],T.cityInputVal,void 0,{trim:!0}]]),Object(r["d"])("div",u,[Object(r["d"])("button",{class:"btn btn-primary",type:"button",id:"citySearch",onClick:t[2]||(t[2]=function(){return V.handleSearch&&V.handleSearch.apply(V,arguments)})},p)])])]),h,Object(r["d"])("div",b,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(T.mostPopularCities,(function(e){return Object(r["h"])(),Object(r["c"])("button",{onClick:function(t){return V.getCurrentWeather(e.name)},type:"button",class:"list-group-item list-group-item-action",key:e.name},Object(r["k"])(e.name),9,m)})),128))])]})),_:1}),Object(r["f"])(A,{class:"col-sm-8 col-md-9"},{default:Object(r["m"])((function(){return[Object(r["d"])("div",f,[Object(r["d"])("div",g,[Object(r["d"])("div",y,[Object(r["d"])("h3",j,[Object(r["e"])(Object(r["k"])(T.formatedDate),1),Object(r["d"])("img",{src:e.weatherIcon,id:"icon",alt:"Weather Icon"},null,8,O)]),Object(r["d"])("div",v,[Object(r["d"])("p",null,[w,Object(r["d"])("span",x,Object(r["k"])(T.currentTemp),1)]),Object(r["d"])("p",null,[C,Object(r["d"])("span",I,Object(r["k"])(T.currentHumidity),1)]),Object(r["d"])("p",null,[S,Object(r["d"])("span",k,Object(r["k"])(T.currentWindSpeed),1)]),Object(r["d"])("p",null,[D,Object(r["d"])("span",{id:"uvIndex",class:Object(r["g"])(T.uvIndexClass)},Object(r["k"])(T.currentUVInd),3)])])])]),W])]})),_:1})])])])}var V=n("1da1"),U=(n("96cf"),n("a15b"),n("ac1f"),n("1276"),n("fb6a"),n("d3b7"),n("a4d3"),n("e01a"),{name:"App",components:{},data:function(){return{searchFormEl:"",cityInputVal:"",searchBtn:"",popularCityListGroupEl:".list-group-1",usersCityListGroupEl:".list-group-2",weatherContentDiv:"",cardDivEl:"",cardTitleEl:"",weatherIconEl:"",uvIndexEl:"",uvIndexClass:"",openWeatherQueryUrl:"https://api.openweathermap.org/data/2.5/",apiKey:"cce801f5223df23bb3369079c0a9d97e",existingEntries:JSON.parse(localStorage.getItem("cities")),rawWeatherData:"",mostPopularCities:[{name:"New York City"},{name:"London"},{name:"Singapore"},{name:"Los Angeles"},{name:"Hong Kong"},{name:"Tokyo"}],currentDate:new Date,currentCityName:"Dhaka",formatedDate:"",currentTemp:"",currentHumidity:"",currentWindSpeed:"",currentUVInd:""}},methods:{initializeDashboard:function(){null!==localStorage.getItem("cities")&&(this.existingEntries=localStorage.getItem("cities")),this.getCurrentWeather(this.currentCityName)},handleSearch:function(){var e=this.cityInputVal;e?(this.getCurrentWeather(e),this.cityInputVal=""):alert("You must enter a valid city name")},getTodaysDate:function(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return[n,r,a].join("/")},formatDate:function(e){var t=e.split("-")[0],n=e.split("-")[1],r=e.split("-")[2];return"0"===n.charAt(0)&&(n=n.slice(1)),"0"===r.charAt(0)&&(r=r.slice(1)),[n,r,t].join("/")},getCurrentWeather:function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="http://localhost:8000/api/?resource=weather&city_name="+t,a=n("bc3a"),e.next=4,a.get(r).then((function(e){return e.data})).then((function(e){console.log(e),o.rawWeatherData=e.data,o.displayCurrentWeather(o.rawWeatherData),o.currentCityName=t})).catch((function(e){e.response?(console.log(e.response.data),alert(e.response.data.message),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUVIndex:function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t,r){var a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.uvIndexQueryUrl="http://localhost:8000/api/?resource=uvi&lat="+t+"&lon="+r,a=n("bc3a"),e.next=4,a.get(this.uvIndexQueryUrl).then((function(e){return e.data})).then((function(e){console.log(e);var t=e.data.value,n="";t<=2?n="green":t<=5?n="yellow":t<=7?n="orange":t<=10?n="red":t>10&&(n="violet"),o.uvIndexClass=n,o.currentUVInd=t})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),getForecast:function(e){var t=this.openWeatherQueryUrl+"forecast?q="+e+"&appid="+this.apiKey+"&units=imperial";fetch(t).then((function(e){return e.ok?e.json():void console.log("There is an issue. Status Code: "+e.status)})).then((function(e){console.log("Here is the object containing the forcast data"),console.log(e);for(var t=[],n=0;n<e.list.length;n++)n%8===0&&t.push({date:e.list[n].dt_txt.split(" ")[0],icon:e.list[n].weather[0].icon,iconAlt:e.list[n].weather[0].description,temp:e.list[n].main.temp,humidity:e.list[n].main.humidity});for(var r=0;r<t.length;r++){var a=document.querySelectorAll(".date-title"),o=document.querySelectorAll("#forecastIcon"),c=document.querySelectorAll("#tempForecast"),i=document.querySelectorAll("#humidityForecast");a[r].textContent=this.formatDate(t[r].date),o[r].setAttribute("src","https://openweathermap.org/img/wn/"+t[r].icon+"@2x.png"),o[r].setAttribute("alt",t[r].iconAlt),c[r].textContent=t[r].temp+" °F",i[r].textContent=t[r].humidity+"%"}console.log(t),console.log("------------------------------------------------")})).catch((function(e){console.log("There is an error: "+e)}))},displayCurrentWeather:function(e){if(console.log(e),this.formatedDate=this.currentCityName+" ("+this.getTodaysDate(this.currentDate)+") ",this.weatherIcon="https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",e.main.temp?this.currentTemp=e.main.temp+" °F":this.currentTemp="No temperature for this city.",e.main.humidity?this.currentHumidity=e.main.humidity+"%":this.currentHumidity="No humidity for this city.",e.wind.speed?this.currentWindSpeed=" MPH":this.currentWindSpeed="No wind speed for this city.",e.coord.lat&&e.coord.lon){var t=e.coord.lat,n=e.coord.lon;this.getUVIndex(t,n)}else this.currentUVInd="No UV index for this city."}},mounted:function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.initializeDashboard();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),A=(n("e829"),n("6b0d")),E=n.n(A);const F=E()(U,[["render",T]]);var P=F;Object(r["b"])(P).mount("#app")},e829:function(e,t,n){"use strict";n("ed5e")},ed5e:function(e,t,n){}});
//# sourceMappingURL=index.93d88192.js.map