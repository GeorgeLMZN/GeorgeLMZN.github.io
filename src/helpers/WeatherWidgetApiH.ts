import WeatherIcons from '@/icons_data/weather_icons';
import { WeatherDataI } from '@/interface/WeatherDataI';

export async function faRequestDataFromURL(url: string) {
  const response = await (await fetch(url)).json();
  return response;
}

export function fParseRawData(vWeatherApiData: any): WeatherDataI {
  const idIcon: number = vWeatherApiData.weather[0].id.toString();

  return {
    id: vWeatherApiData.id,
    visibility: vWeatherApiData.visibility,
    weather: vWeatherApiData.weather[0].main,
    temp: vWeatherApiData.main.temp,
    temp_max: vWeatherApiData.main.temp_max,
    temp_min: vWeatherApiData.main.temp_min,
    feels_like: vWeatherApiData.main.feels_like,
    grnd_level: vWeatherApiData.main.grnd_level,
    humidity: vWeatherApiData.main.humidity,
    pressure: vWeatherApiData.main.pressure,
    sea_level: vWeatherApiData.main.sea_level,
    icon_url: WeatherIcons[idIcon].icon,
    city: vWeatherApiData.name,
    wind_deg: vWeatherApiData.wind.deg,
    wind_gust: vWeatherApiData.wind.gust,
    wind_speed: vWeatherApiData.wind.speed,
    country: vWeatherApiData.sys.country,
  };
}
