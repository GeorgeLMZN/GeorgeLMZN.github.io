import { WeatherIcons } from '../service/DownloadUiIonsS';
import { WeatherDataI } from '../interface/WeatherDataI';

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
    feels_like: vWeatherApiData.main.feels_like,
    humidity: vWeatherApiData.main.humidity,
    pressure: vWeatherApiData.main.pressure,
    icon_url: WeatherIcons[idIcon].icon,
    city: vWeatherApiData.name,
    wind_speed: vWeatherApiData.wind.speed,
    country: vWeatherApiData.sys.country,
  };
}
