(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),s=a.n(c),r=a(3),l=a(4),o=a(6),m=a(5),d=a(7),u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={temp:"~",humidity:"~",wind_speed:"~",description:"~",icon:"wi-sunrise",wind_icon:"wi-wind-beaufort-0",location:"~"},a.showWeather=function(){var e=document.getElementById("city").value,t=document.getElementById("country").value,n="https://openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&appid=").concat("439d4b804bc8187953eb36d2a8c26a02","&units=metric");""===e||""===t?alert("Please enter a valid Location :("):fetch(n).then((function(e){return e.json()})).then((function(n){var i=n.main.temp,c=n.main.humidity,s=n.wind.speed,r=n.weather[0].main.toLowerCase(),l=Math.round(n.wind.speed);"haze"===r?a.setState({icon:"wi-day-haze"}):"clouds"===r?a.setState({icon:"wi-cloudy"}):"clear"===r?a.setState({icon:"wi-night-clear"}):a.setState({icon:"wi-".concat(r)}),a.setState({temp:i}),a.setState({humidity:c}),a.setState({wind_speed:s}),a.setState({description:r}),a.setState({wind_icon:"wi-wind-beaufort-".concat(l)}),a.setState({location:"".concat(e,", ").concat(t)}),a.clearInput()})).catch((function(e){alert("Something went wrong please check your details and try again, TIP: Try typing your city or country name seprated by space :("),a.clearInput()}))},a.clearInput=function(){document.getElementById("city").value="",document.getElementById("country").value=""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:"https://www.airzone.es/wp-content/uploads/2015/11/meteo-ico.png",alt:"brand_icon"})),i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"input-fields"},i.a.createElement("input",{type:"text",id:"city",required:!0,placeholder:"City",title:"Enter your city name"}),i.a.createElement("i",{className:"fa fa-times clear-btn",onClick:this.clearInput})),i.a.createElement("div",{className:"input-fields"},i.a.createElement("input",{type:"text",id:"country",className:"input-fields",required:!0,placeholder:"Country",title:"Enter your country name"}),i.a.createElement("i",{className:"fa fa-times clear-btn",onClick:this.clearInput})),i.a.createElement("button",{className:"weather-btn",type:"submit",onClick:this.showWeather},"Show Weather")),i.a.createElement("div",{className:"weather-details"},i.a.createElement("div",{className:"location"},this.state.location),i.a.createElement("div",{className:"weather-icon"},i.a.createElement("i",{className:"wi ".concat(this.state.icon," weather-icon")})),i.a.createElement("div",{className:"temp"},i.a.createElement("div",{className:"temp-icon"},i.a.createElement("i",{className:"wi wi-thermometer"})),i.a.createElement("div",{className:"temp-value"},this.state.temp," \u2103")),i.a.createElement("div",{className:"wind-speed-humidity"},i.a.createElement("div",{className:"wind-speed"},i.a.createElement("i",{className:"wi ".concat(this.state.wind_icon," wind-speed-icon")}),i.a.createElement("div",{className:"wind-speed-value"},this.state.wind_speed," m/s")),i.a.createElement("div",{className:"humidity"},i.a.createElement("i",{className:"wi wi-humidity"}),i.a.createElement("div",{className:"humidity-value"},this.state.humidity,"%"))),i.a.createElement("div",{className:"weather-description"},this.state.description)),i.a.createElement("footer",null,i.a.createElement("span",null,"Made with ",i.a.createElement("i",{className:"fa fa-heart fab"})," by Himanshu Yadav")))}}]),t}(n.Component);a(13);s.a.render(i.a.createElement(u,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1b05907d.chunk.js.map