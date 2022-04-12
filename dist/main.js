(()=>{"use strict";const e=document.querySelector(".content"),t=(document.querySelector(".city"),["0","1","2","3","4","5","6","7"]);function n(o,a){let c=Object.keys(a);console.log(c),c.forEach((c=>{if("weather"===c||t.includes(c))return n(o,a[c]);o[c]="dt"===c?function(e){let t=new Date(1e3*e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}(a[c]):"sunrise"===c||"sunset"===c?function(e){let t=new Date(1e3*e);return`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`}(a[c]):"temp"===c||"feels_like"===c||"dew_point"===c?`${Math.round(a[c],1).toFixed(1)}°C`:"pressure"===c?`${a[c]}hpa`:"humidity"===c||"clouds"===c?`${a[c]}%`:"visibility"===c?`${Math.round(a[c]/1e3,2).toFixed(2)}km`:"wind_speed"===c?`${a[c]}m/s`:"rain"===c||"snow"===c?`${a[c]}mm`:a[c],function(t,n){if("icon"===t){const o=document.createElement("img");o.id=t,o.className="weather-info",o.src=`http://openweathermap.org/img/wn/${n}@2x.png`,o.alt=t,e.append(o)}const o=document.createElement("div");o.id=t,o.className="weather-info",o.innerHTML=`${t}: ${n}`,e.append(o)}(c,o[c],parent)}))}let o={};!function(){const e=document.querySelector("nav"),t=document.createElement("form"),n=document.createElement("input");n.type="text",n.id="input",n.className="form__input",n.placeholder="Enter Location...",t.append(n);const o=document.createElement("input");o.type="submit",o.className="btn",o.classList.add("submit"),o.innerHTML="submit",t.append(o),e.append(t);const a=document.createElement("div");a.className="nav-links",e.append(a);const c=document.createElement("a");c.href="#",c.innerHTML="Home",a.append(c);const i=document.createElement("a");i.href="#",i.innerHTML="About",a.append(i)}(),document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.querySelector(".content")),async function(e,t){const o=await async function(e){const t=await fetch(function(e){return`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`}(e),{mode:"cors"}),n=await t.json();return{lat:n[0].lat,lon:n[0].lon}}(t),a=await fetch((c=o.lat,i=o.lon,`https://api.openweathermap.org/data/2.5/onecall?lat=${c}&lon=${i}&units=metric&exclude=hourly,minutely&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`),{mode:"cors"});var c,i;const r=await a.json();console.log(r),n(e,r.current),n(e,r.daily)}(o,document.getElementById("input").value)}))})();