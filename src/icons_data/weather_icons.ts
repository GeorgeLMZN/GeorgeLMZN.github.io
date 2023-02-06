import { WeatherIconsI } from '../interface/WeatherIconsI';

/* eslint-disable @typescript-eslint/no-var-requires */
const thunderStormLightRain: string = require('@/assets/icons/weather/thunderStormLightRain.svg');
const thunderStormLight: string = require('@/assets/icons/weather/thunderStormLight.svg');
const thunderStorm: string = require('@/assets/icons/weather/thunderStorm.svg');
const drizzle: string = require('@/assets/icons/weather/drizzle.svg');
const lightRain: string = require('@/assets/icons/weather/lightRain.svg');
const rain: string = require('@/assets/icons/weather/lightRain.svg');
const snow: string = require('@/assets/icons/weather/lightRain.svg');
const fog: string = require('@/assets/icons/weather/fog.svg');
const clear: string = require('@/assets/icons/weather/clear.svg');
const fewCLouds: string = require('@/assets/icons/weather/fewClouds.svg');
const clouds: string = require('@/assets/icons/weather/fewClouds.svg');
const brokenClouds: string = require('@/assets/icons/weather/brokenClouds.svg');

const WeatherIcons: WeatherIconsI = {
  200: { name: 'Thunderstorm thunderstorm with light rain', icon: thunderStormLightRain },
  201: { name: 'Thunderstorm thunderstorm with rain', icon: thunderStormLightRain },
  202: { name: 'Thunderstorm thunderstorm with heavy rain', icon: thunderStormLightRain },
  210: { name: 'Thunderstorm light thunderstorm', icon: thunderStormLight },
  211: { name: 'Thunderstorm thunderstorm', icon: thunderStorm },
  212: { name: 'Thunderstorm heavy thunderstorm', icon: thunderStorm },
  221: { name: 'Thunderstorm ragged thunderstorm', icon: thunderStorm },
  230: { name: 'Thunderstorm thunderstorm with light drizzle', icon: thunderStormLightRain },
  231: { name: 'Thunderstorm thunderstorm with drizzle', icon: thunderStormLightRain },
  232: { name: 'Thunderstorm thunderstorm with heavy drizzle', icon: thunderStormLightRain },
  300: { name: 'Drizzle light intensity drizzle', icon: drizzle },
  301: { name: 'Drizzle drizzle', icon: drizzle },
  302: { name: 'Drizzle heavy intensity drizzle', icon: drizzle },
  310: { name: 'Drizzle light intensity drizzle rain', icon: drizzle },
  311: { name: 'Drizzle drizzle rain', icon: drizzle },
  312: { name: 'Drizzle heavy intensity drizzle rain', icon: drizzle },
  313: { name: 'Drizzle shower rain and drizzle', icon: drizzle },
  314: { name: 'Drizzle heavy shower rain and drizzle', icon: drizzle },
  321: { name: 'Drizzle shower drizzle', icon: drizzle },
  500: { name: 'Rain light rain', icon: lightRain },
  501: { name: 'Rain moderate rain', icon: lightRain },
  502: { name: 'Rain heavy intensity rain', icon: rain },
  503: { name: 'Rain very heavy rain', icon: rain },
  504: { name: 'Rain extreme rain', icon: rain },
  511: { name: 'Rain freezing rain', icon: rain },
  520: { name: 'Rain light intensity shower rain', icon: rain },
  521: { name: 'Rain shower rain', icon: rain },
  522: { name: 'Rain heavy intensity shower rain', icon: rain },
  531: { name: 'Rain ragged shower rain', icon: rain },
  600: { name: 'Snow light snow', icon: snow },
  601: { name: 'Snow Snow', icon: snow },
  602: { name: 'Snow Heavy snow', icon: snow },
  611: { name: 'Snow Sleet', icon: snow },
  612: { name: 'Snow Light shower sleet', icon: snow },
  613: { name: 'Snow Shower sleet', icon: snow },
  615: { name: 'Snow Light rain and snow', icon: snow },
  616: { name: 'Snow Rain and snow', icon: snow },
  620: { name: 'Snow Light shower snow', icon: snow },
  621: { name: 'Snow Shower snow', icon: snow },
  622: { name: 'Snow Heavy shower snow', icon: snow },
  701: { name: 'Mist mist', icon: fog },
  711: { name: 'Smoke Smoke', icon: fog },
  721: { name: 'Haze Haze', icon: fog },
  731: { name: 'Dust sand/ dust whirls', icon: fog },
  741: { name: 'Fog fog', icon: fog },
  751: { name: 'Sand sand', icon: fog },
  761: { name: 'Dust dust', icon: fog },
  762: { name: 'Ash volcanic ash', icon: fog },
  771: { name: 'Squall squalls', icon: fog },
  781: { name: 'Tornado tornado', icon: fog },
  800: { name: 'Clear', icon: clear },
  801: { name: 'Clouds few clouds', icon: fewCLouds },
  802: { name: 'Clouds scattered clouds', icon: clouds },
  803: { name: 'Clouds broken clouds', icon: brokenClouds },
  804: { name: 'Clouds', icon: clouds },
};

export default WeatherIcons;
