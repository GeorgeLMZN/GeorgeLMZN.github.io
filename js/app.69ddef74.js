(function(){"use strict";var e={3213:function(e,t,i){var n=i(9242),r=i(3396);function a(e,t,i,n,a,s){const o=(0,r.up)("weather-widget");return(0,r.wg)(),(0,r.j4)(o)}const s={class:"weather-widget_wrapper"};function o(e,t,i,n,a,o){const d=(0,r.up)("weather-widget-no-cities"),h=(0,r.up)("weather-widget-list-weather"),c=(0,r.up)("weather-widget-list-city");return(0,r.wg)(),(0,r.iD)("div",s,[e.isEmptyCitiesList&&!e.isCityListOpen?((0,r.wg)(),(0,r.j4)(d,{key:0,onOnCitiesListVisibilityChange:e.fCitiesListVisibilityChange},null,8,["onOnCitiesListVisibilityChange"])):(0,r.kq)("",!0),e.isEmptyCitiesList?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(h,{key:1,isEmptyCitiesList:e.isEmptyCitiesList,isCityListOpen:e.isCityListOpen,ixWeather:e.ixWeather,onOnOpenCitiesList:e.fCitiesListVisibilityChange},null,8,["isEmptyCitiesList","isCityListOpen","ixWeather","onOnOpenCitiesList"])),(0,r.Wm)(c,{isCityListOpen:e.isCityListOpen,ixWeather:e.ixWeather,onOnDeleteCity:e.fDeleteCity,onOnCloseCitiesList:e.fCitiesListVisibilityChange,onOnAddCity:e.faAddCity,onOnDropItem:e.fSortWeatherData},null,8,["isCityListOpen","ixWeather","onOnDeleteCity","onOnCloseCitiesList","onOnAddCity","onOnDropItem"])])}var d=i(7327);const h=i(2845),c=i(6651),g=i(3315),l=i(2186),w=i(8019),p=i(8019),u=i(8019),m=i(8916),y=i(6279),f=i(603),b=i(603),x=i(6627),_={200:{name:"Thunderstorm thunderstorm with light rain",icon:h},201:{name:"Thunderstorm thunderstorm with rain",icon:h},202:{name:"Thunderstorm thunderstorm with heavy rain",icon:h},210:{name:"Thunderstorm light thunderstorm",icon:c},211:{name:"Thunderstorm thunderstorm",icon:g},212:{name:"Thunderstorm heavy thunderstorm",icon:g},221:{name:"Thunderstorm ragged thunderstorm",icon:g},230:{name:"Thunderstorm thunderstorm with light drizzle",icon:h},231:{name:"Thunderstorm thunderstorm with drizzle",icon:h},232:{name:"Thunderstorm thunderstorm with heavy drizzle",icon:h},300:{name:"Drizzle light intensity drizzle",icon:l},301:{name:"Drizzle drizzle",icon:l},302:{name:"Drizzle heavy intensity drizzle",icon:l},310:{name:"Drizzle light intensity drizzle rain",icon:l},311:{name:"Drizzle drizzle rain",icon:l},312:{name:"Drizzle heavy intensity drizzle rain",icon:l},313:{name:"Drizzle shower rain and drizzle",icon:l},314:{name:"Drizzle heavy shower rain and drizzle",icon:l},321:{name:"Drizzle shower drizzle",icon:l},500:{name:"Rain light rain",icon:w},501:{name:"Rain moderate rain",icon:w},502:{name:"Rain heavy intensity rain",icon:p},503:{name:"Rain very heavy rain",icon:p},504:{name:"Rain extreme rain",icon:p},511:{name:"Rain freezing rain",icon:p},520:{name:"Rain light intensity shower rain",icon:p},521:{name:"Rain shower rain",icon:p},522:{name:"Rain heavy intensity shower rain",icon:p},531:{name:"Rain ragged shower rain",icon:p},600:{name:"Snow light snow",icon:u},601:{name:"Snow Snow",icon:u},602:{name:"Snow Heavy snow",icon:u},611:{name:"Snow Sleet",icon:u},612:{name:"Snow Light shower sleet",icon:u},613:{name:"Snow Shower sleet",icon:u},615:{name:"Snow Light rain and snow",icon:u},616:{name:"Snow Rain and snow",icon:u},620:{name:"Snow Light shower snow",icon:u},621:{name:"Snow Shower snow",icon:u},622:{name:"Snow Heavy shower snow",icon:u},701:{name:"Mist mist",icon:m},711:{name:"Smoke Smoke",icon:m},721:{name:"Haze Haze",icon:m},731:{name:"Dust sand/ dust whirls",icon:m},741:{name:"Fog fog",icon:m},751:{name:"Sand sand",icon:m},761:{name:"Dust dust",icon:m},762:{name:"Ash volcanic ash",icon:m},771:{name:"Squall squalls",icon:m},781:{name:"Tornado tornado",icon:m},800:{name:"Clear",icon:y},801:{name:"Clouds few clouds",icon:f},802:{name:"Clouds scattered clouds",icon:b},803:{name:"Clouds broken clouds",icon:x},804:{name:"Clouds",icon:b}};var C=_;async function v(e){const t=await(await fetch(e)).json();return t}function W(e){const t=e.weather[0].id.toString();return{id:e.id,visibility:e.visibility,weather:e.weather[0].main,temp:e.main.temp,temp_max:e.main.temp_max,temp_min:e.main.temp_min,feels_like:e.main.feels_like,grnd_level:e.main.grnd_level,humidity:e.main.humidity,pressure:e.main.pressure,sea_level:e.main.sea_level,icon_url:C[t].icon,city:e.name,wind_deg:e.wind.deg,wind_gust:e.wind.gust,wind_speed:e.wind.speed,country:e.sys.country}}class z{constructor(){(0,d.Z)(this,"sWeatherApiKey","6cf475f4c7ee868891dde1b39cd3f0e7"),(0,d.Z)(this,"sWeatherApiUrl","https://api.openweathermap.org/")}async faGetWeatherDataByCityName(e){const t=await v(`${this.sWeatherApiUrl}data/2.5/weather?q=${e}&lang=en&units=metric&appid=${this.sWeatherApiKey}`);return W(t)}async faGetWeatherDataByCoords(e){const t=await v(`${this.sWeatherApiUrl}data/2.5/weather?units=metric&lat=${e.lat}&lon=${e.lon}&appid=${this.sWeatherApiKey}`);return W(t)}}class D{getCurrentLocation(){return new Promise(((e,t)=>{navigator.geolocation?.getCurrentPosition((t=>e({lat:t.coords.latitude,lon:t.coords.longitude})),(e=>t(e)),{maximumAge:0})}))}}class L{constructor(){(0,d.Z)(this,"storageKey","weather_widget_cities_list")}saveData(e){localStorage.setItem(this.storageKey,JSON.stringify(e))}getData(){const e=localStorage.getItem(this.storageKey)||"{}";return JSON.parse(e)}}class O{sortIxItemsByOrder(e,t){const i={},n={...t},r=Object.values(n).indexOf(e.item_before);delete n[e.item.city];const a=Object.values(n);return a.splice(r,0,t[e.item.city]),a.forEach((e=>{i[e.city]=e})),i}}class S{constructor(){(0,d.Z)(this,"weatherWidgetSortDataS",void 0),(0,d.Z)(this,"weatherWidgetApiS",void 0),(0,d.Z)(this,"weatherWidgetLocationS",void 0),(0,d.Z)(this,"weatherWidgetStorageS",void 0),this.weatherWidgetSortDataS=new O,this.weatherWidgetApiS=new z,this.weatherWidgetLocationS=new D,this.weatherWidgetStorageS=new L}saveData(e){return this.weatherWidgetStorageS.saveData(e)}getData(){return this.weatherWidgetStorageS.getData()}getCurrentLocation(){return this.weatherWidgetLocationS.getCurrentLocation()}async faGetWeatherDataByCoords(e){return this.weatherWidgetApiS.faGetWeatherDataByCoords(e)}async faGetWeatherDataByCityName(e){return this.weatherWidgetApiS.faGetWeatherDataByCityName(e)}sortIxItemsByOrder(e,t){return this.weatherWidgetSortDataS.sortIxItemsByOrder(e,t)}}const k=new S;var j=i(7139);const B={class:"weather-widget_head"},A={class:"weather-widget_heading"},I={class:"weather-widget_item"},Z={class:"weather-widget_main"},T=["src"],E={class:"weather-widget_temp"},V={class:"weather-widget_info"},R={class:"weather-widget_row"},$={class:"weather-widget_item"},K={class:"weather-widget_row"},N={class:"weather-widget_item"},U={class:"weather-widget_row"},q={class:"weather-widget_item"},G={class:"weather-widget_row"},H={class:"weather-widget_item"},M={class:"weather-widget_row"},P={class:"weather-widget_item"};function F(e,t,i,n,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,j.C_)([{"d-none":e.isCityListOpen||e.isEmptyCitiesList&&!e.isCityListOpen},"weather-widget"])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.ixWeather,(i=>((0,r.wg)(),(0,r.iD)("div",{key:i.id,class:"weather-widget_single"},[(0,r._)("div",B,[(0,r._)("h4",A,[(0,r.Uk)((0,j.zw)(i.city)+", "+(0,j.zw)(i.country)+" ",1),(0,r._)("span",I,(0,j.zw)(i.weather),1)]),(0,r._)("button",{onClick:t[0]||(t[0]=(...t)=>e.fOpenCitiesList&&e.fOpenCitiesList(...t)),style:(0,j.j5)({"background-image":"url("+e.btnOpenBg+")"}),class:"weather-widget_btn"},null,4)]),(0,r._)("div",Z,[(0,r._)("img",{class:"weather-widget_img",src:i.icon_url,alt:"Weather icon"},null,8,T),(0,r._)("span",E,(0,j.zw)(i.temp)+"°С",1)]),(0,r._)("div",V,[(0,r._)("div",R,[(0,r._)("div",$," Feels like "+(0,j.zw)(i.feels_like)+"°С, ",1)]),(0,r._)("div",K,[(0,r._)("div",N," Wind speed: "+(0,j.zw)(i.wind_speed)+"m/s, ",1)]),(0,r._)("div",U,[(0,r._)("div",q,[(0,r.Uk)(" Pressure: "),(0,r._)("span",{style:(0,j.j5)({"background-image":"url("+e.pressureBgIcon+")"}),class:"weather-widget_icon"},null,4),(0,r.Uk)(" "+(0,j.zw)(i.pressure)+"hPa ",1)])]),(0,r._)("div",G,[(0,r._)("div",H," Humidity: "+(0,j.zw)(i.humidity)+"% ",1)]),(0,r._)("div",M,[(0,r._)("div",P," Visibility: "+(0,j.zw)(i.visibility/1e3)+"km ",1)])])])))),128))],2)}const J=i(8533),Y=i(805),Q=i(1418),X=i(420),ee=i(967);var te=(0,r.aZ)({name:"WeatherWidgetListWeather",data(){return{pressureBgIcon:J,btnOpenBg:Q}},props:{ixWeather:{type:Object,required:!0},isCityListOpen:{type:Boolean,required:!0,default:!1},isEmptyCitiesList:{type:Boolean,required:!0,default:!1}},methods:{fOpenCitiesList(){this.$emit("on-open-cities-list")}}}),ie=i(89);const ne=(0,ie.Z)(te,[["render",F]]);var re=ne;const ae={class:"weather-widget_head"},se=(0,r._)("h4",{class:"weather-widget_heading"},"Settings",-1),oe=["onDrop","onDragstart"],de=["onClick"],he={class:"weather-widget_input-wrapper",for:"add_city"},ce=["disabled"];function ge(e,t,i,a,s,o){return(0,r.wg)(),(0,r.iD)("div",{class:(0,j.C_)(["weather-widget_list",{"d-none":!e.isCityListOpen}])},[(0,r._)("div",ae,[se,(0,r._)("button",{onClick:t[0]||(t[0]=(...t)=>e.fChangeCitiesListVisibility&&e.fChangeCitiesListVisibility(...t)),style:(0,j.j5)({"background-image":"url("+e.btnCloseBg+")"}),class:"weather-widget_btn"},null,4)]),(0,r._)("div",{onDragover:t[1]||(t[1]=(0,n.iM)((()=>{}),["prevent"])),onDragenter:t[2]||(t[2]=(0,n.iM)((()=>{}),["prevent"])),class:"weather-widget_body"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.ixWeather,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,draggable:"true",onDrop:(0,n.iM)((i=>e.fOnDrop(i,t)),["prevent"]),onDragstart:i=>e.fStartDrag(i,t),class:"city-item"},[(0,r.Uk)((0,j.zw)(t.city)+" ",1),(0,r._)("button",{onClick:i=>e.fDelCity(t.city),style:(0,j.j5)({"background-image":"url("+e.btnTrashBg+")"}),class:"weather-widget_btn delete"},null,12,de)],40,oe)))),128))],32),(0,r._)("label",he,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.sCity=t),onKeypress:t[4]||(t[4]=(0,n.D2)(((...t)=>e.fAddCity&&e.fAddCity(...t)),["enter"])),class:"weather-widget_input",id:"add_city",type:"text",autocomplete:"off"},null,544),[[n.nr,e.sCity]]),(0,r._)("button",{onClick:t[5]||(t[5]=(...t)=>e.fAddCity&&e.fAddCity(...t)),disabled:!e.sCity,style:(0,j.j5)({"background-image":"url("+e.btnEnterBg+")"}),class:"weather-widget_btn add"},null,12,ce)])],2)}var le=(0,r.aZ)({name:"WeatherWidgetListCity",props:{ixWeather:{},isCityListOpen:Boolean},data(){return{sCity:"",currentItem:{},btnEnterBg:Y,btnTrashBg:ee,btnCloseBg:X}},methods:{fChangeCitiesListVisibility(){this.$emit("on-close-cities-list")},fAddCity(){this.$emit("on-add-city",{city:this.sCity}),this.sCity=""},fDelCity(e){this.$emit("on-delete-city",e)},fStartDrag(e,t){this.currentItem=t},fOnDrop(e,t){const i={item_before:t,item:this.currentItem};this.$emit("on-drop-item",i)}}});const we=(0,ie.Z)(le,[["render",ge]]);var pe=we;const ue={class:"no-cities"};function me(e,t,i,n,a,s){return(0,r.wg)(),(0,r.iD)("div",ue,[(0,r.Uk)(" No cities yet... "),(0,r._)("button",{onClick:t[0]||(t[0]=(...t)=>e.fCitiesListVisibilityChange&&e.fCitiesListVisibilityChange(...t)),class:"no-cities_btn"},"Add one?")])}var ye=(0,r.aZ)({name:"WeatherWidgetNoCities",methods:{fCitiesListVisibilityChange(){this.$emit("on-cities-list-visibility-change")}}});const fe=(0,ie.Z)(ye,[["render",me]]);var be=fe,xe=(0,r.aZ)({name:"WeatherWidget",components:{WeatherWidgetListWeather:re,WeatherWidgetListCity:pe,WeatherWidgetNoCities:be},data(){return{isCityListOpen:!1,ixWeather:{}}},methods:{fCitiesListVisibilityChange(){this.isCityListOpen=!this.isCityListOpen},fDeleteCity(e){delete this.ixWeather[e],this.ixWeather={...this.ixWeather},k.saveData(this.ixWeather)},fSortWeatherData(e){this.ixWeather={...k.sortIxItemsByOrder(e,this.ixWeather)},k.saveData(this.ixWeather)},async faAddCity(e){const t=await k.faGetWeatherDataByCityName(e.city);this.ixWeather[t.city]=t,this.ixWeather={...this.ixWeather},k.saveData(this.ixWeather)}},async created(){const e=k.getData();if(Object.keys(e).length)this.ixWeather=e;else{const e=await k.getCurrentLocation(),t=await k.faGetWeatherDataByCoords(e);this.ixWeather[t.city]=t,this.ixWeather={...this.ixWeather},k.saveData(this.ixWeather)}},computed:{isEmptyCitiesList(){return!Object.keys(this.ixWeather).length},isShowControls(){return this.isEmptyCitiesList&&!this.isCityListOpen}}});const _e=(0,ie.Z)(xe,[["render",o]]);var Ce=_e,ve=(0,r.aZ)({name:"App",components:{WeatherWidget:Ce}}),We='.weather-widget_wrapper{font-family:"Montserrat";width:370px;max-width:100%;color:#fff;box-sizing:border-box;font-size:20px;font-weight:500;cursor:default}.weather-widget{width:100%;min-height:200px;text-shadow:4px 2px 2px rgba(0,0,0,.6)}.weather-widget_single{position:relative;padding-top:15px;background-color:rgba(21,22,23,.7);padding:15px 20px 15px;border-radius:20px;margin-bottom:10px}.weather-widget_single:before{content:"";position:absolute;width:100%;height:100%;left:0;bottom:0;z-index:-1;border-radius:20px;background-image:linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 0.9) 95%, rgb(0, 0, 0) 100%)}.weather-widget_list{width:100%;height:100%;z-index:1;box-sizing:inherit;background-color:rgba(21,22,23,.7);border-radius:20px;padding:15px 20px 15px}.weather-widget_head{display:flex;justify-content:space-between;align-items:flex-start}.weather-widget_heading{margin:0;font-size:30px;font-weight:500;line-height:30px}.weather-widget_main{font-size:45px;padding:50px 15px 25px 10px;box-sizing:border-box;font-weight:600;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.weather-widget_img{width:180px;margin-bottom:20px}.weather-widget_icon{width:30px;height:30px;display:block;background-color:rgba(0,0,0,0);background-size:contain;background-repeat:no-repeat;width:25px;margin:0 5px 0 10px;height:25px}.weather-widget_btn{width:30px;height:30px;background-color:rgba(0,0,0,0);background-size:contain;background-repeat:no-repeat;border:0;transition:transform .5s;cursor:pointer}.weather-widget_btn:hover{transform:scale(1.1)}.weather-widget_btn.add{width:20px;height:20px}.weather-widget_btn.delete{width:20px;height:20px}.weather-widget_btn.absolute{position:absolute;top:15px;right:20px;z-index:2;border-radius:50%}.weather-widget_info{padding:25px 0;box-sizing:border-box}.weather-widget_row{display:flex;justify-content:flex-start;margin-top:25px}.weather-widget_row:first-child{margin-top:0}.weather-widget_item{display:flex;align-items:center;margin-right:10px;font-size:20px;letter-spacing:2px}.weather-widget_item:last-child{margin-right:0}.weather-widget_body{margin-top:25px}.weather-widget_body .city-item{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;box-sizing:border-box;margin-bottom:5px;border:1px solid rgba(255,255,255,.4);cursor:grab}.weather-widget_body .city-item:last-child{margin-bottom:0}.weather-widget_input-wrapper{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;width:100%;border:1px solid rgba(255,255,255,.4);margin-top:20px;box-sizing:border-box}.weather-widget_input{border:0;flex:1;background-color:inherit;color:#fff;font-size:14px;font-weight:600}.weather-widget_input:focus{outline:none}.no-cities{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;max-width:350px;box-sizing:border-box;background-color:rgba(21,22,23,.9);border-radius:20px;padding:15px 20px 15px}.no-cities_btn{background-color:rgba(0,0,0,0);color:#fff;border:1px solid #fff;padding:10px 20px;box-sizing:border-box;margin-top:20px;cursor:pointer}.d-none{display:none}';const ze=(0,ie.Z)(ve,[["render",a],["styles",[We]]]);var De=ze;const Le=(0,n.MW)(De);customElements.define("weather-widget",Le)},420:function(e,t,i){e.exports=i.p+"img/close.cd3dfcdf.svg"},805:function(e,t,i){e.exports=i.p+"img/enter.6b199168.svg"},1418:function(e,t,i){e.exports=i.p+"img/gear.770f387d.svg"},8533:function(e,t,i){e.exports=i.p+"img/pressure.73555d0c.svg"},967:function(e,t,i){e.exports=i.p+"img/trash.8ee3a419.svg"},6627:function(e,t,i){e.exports=i.p+"img/brokenClouds.86c24171.svg"},6279:function(e,t,i){e.exports=i.p+"img/clear.7ff47172.svg"},2186:function(e,t,i){e.exports=i.p+"img/drizzle.af914663.svg"},603:function(e,t,i){e.exports=i.p+"img/fewClouds.53088cea.svg"},8916:function(e,t,i){e.exports=i.p+"img/fog.cc8abf2d.svg"},8019:function(e,t,i){e.exports=i.p+"img/lightRain.34d56501.svg"},3315:function(e,t,i){e.exports=i.p+"img/thunderStorm.d257d6ef.svg"},6651:function(e,t,i){e.exports=i.p+"img/thunderStormLight.a8c44dda.svg"},2845:function(e,t,i){e.exports=i.p+"img/thunderStormLightRain.dfb99557.svg"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,a){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var o=!0,d=0;d<n.length;d++)(!1&a||s>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[d])}))?n.splice(d--,1):(o=!1,a<s&&(s=a));if(o){e.splice(c--,1);var h=r();void 0!==h&&(t=h)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/weather_widget/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],o=n[1],d=n[2],h=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(d)var c=d(i)}for(t&&t(n);h<s.length;h++)a=s[h],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},n=self["webpackChunkweather_widget_v3"]=self["webpackChunkweather_widget_v3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(3213)}));n=i.O(n)})();
//# sourceMappingURL=app.69ddef74.js.map