(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.259ad87e.png"},,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),l=a.n(c),r=a(7),s=a(3),m=a(4),o=a(8),d=a(5),u=a(9),h=a(6),p=a.n(h),E=function(){return i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"spinner"},i.a.createElement("div",{className:"spinner-loader"})))},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={temp:"~",humidity:"~",wind_speed:"~",description:"~",icon:"http://openweathermap.org/img/wn/10d@2x.png",wind_icon:"wi-wind-beaufort-0",location:"~",city:"",country:"",isLoading:!1},a.showWeather=function(){a.setState({isLoading:!0});var e=document.getElementById("city").value,t=document.getElementById("country").value,n="https://openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&appid=").concat("439d4b804bc8187953eb36d2a8c26a02","&units=metric");""===e||""===t?alert("Please enter a valid Location :("):fetch(n).then((function(e){return e.json()})).then((function(n){var i=n.main.temp,c=n.main.humidity,l=(3.6*n.wind.speed).toFixed(1),r=n.weather[0].main.toLowerCase(),s=Math.round(3.6*n.wind.speed);a.setState({temp:i,humidity:c,wind_speed:l,description:r,wind_icon:"wi-wind-beaufort-".concat(s),icon:"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png"),location:"".concat(e,", ").concat(t),isLoading:!1}),a.clearInput()})).catch((function(e){alert("Something went wrong :) please check your details and try again"),a.clearInput("clear_both"),a.setState({isLoading:!1})}))},a.clearInput=function(e){"city"===e?document.getElementById("city").value="":("country"===e||(document.getElementById("city").value=""),document.getElementById("country").value="")},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:p.a,alt:"brand_icon"})),i.a.createElement("header",null,i.a.createElement("div",{className:"input-fields"},i.a.createElement("input",{type:"text",id:"city",required:!0,title:"Enter your city name",placeholder:"City"}),i.a.createElement("label",{htmlFor:"city"},"City"),i.a.createElement("i",{className:"fa fa-times clear-btn",onClick:this.clearInput.bind(this,"city")})),i.a.createElement("div",{className:"input-fields"},i.a.createElement("input",{type:"text",id:"country",required:!0,title:"Enter your country name",placeholder:"Country"}),i.a.createElement("label",{htmlFor:"country"},"Country"),i.a.createElement("i",{className:"fa fa-times clear-btn",onClick:this.clearInput.bind(this,"country")})),i.a.createElement("button",{className:"weather-btn",type:"submit",onClick:this.showWeather},"Show Weather")),this.state.isLoading?i.a.createElement(E,null):null,i.a.createElement("div",{className:"weather-details"},i.a.createElement("div",{className:"location"},this.state.location),i.a.createElement("div",{className:"weather-icon"},i.a.createElement("img",{src:this.state.icon,alt:"Weather Icon"})),i.a.createElement("div",{className:"temp"},i.a.createElement("div",{className:"temp-icon"},i.a.createElement("i",{className:"wi wi-thermometer"})),i.a.createElement("div",{className:"temp-value",style:{color:"var(--theme)"}},this.state.temp," \u2103")),i.a.createElement("div",{className:"wind-speed-humidity"},i.a.createElement("div",{className:"wind-speed"},i.a.createElement("i",{className:"wi ".concat(this.state.wind_icon," wind-speed-icon")}),i.a.createElement("div",{className:"wind-speed-value",style:{color:"var(--theme)"}},this.state.wind_speed," km/h")),i.a.createElement("div",{className:"humidity"},i.a.createElement("i",{className:"wi wi-humidity"}),i.a.createElement("div",{className:"humidity-value",style:{color:"var(--theme)"}},this.state.humidity,"%"))),i.a.createElement("div",{className:"weather-description",style:{color:"var(--theme)"}},this.state.description)),i.a.createElement("footer",null,i.a.createElement("span",null,"Made with ",i.a.createElement("i",{className:"fa fa-heart fab"})," by Himanshu Yadav")))}}]),t}(n.Component),v=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.addEventListener("load",(function(){c(!a)}))}),[a]),i.a.createElement(i.a.Fragment,null,a?i.a.createElement(y,null):i.a.createElement(w,null))};a(15),a(16);l.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4ab3b941.chunk.js.map