/* eslint-disable class-methods-use-this */
import { LocationI } from '@/interface/LocationI';
import { faRequestDataFromURL, fParseRawData } from '@/helpers/WeatherWidgetApiH';
import { WeatherDataI } from '../interface/WeatherDataI';

export default class WeatherWidgetApiS {
    private sWeatherApiKey: string = process.env.VUE_APP_API_KEY_OPEN_WEATHER;

    private sWeatherApiUrl: string = process.env.VUE_APP_API_URL_OPEN_WEATHER;

    public async faGetWeatherDataByCityName(cityName: string): Promise<WeatherDataI> {
      const vWeatherApiData = await faRequestDataFromURL(
        `${this.sWeatherApiUrl}data/2.5/weather?q=${cityName}&lang=en&units=metric&appid=${this.sWeatherApiKey}`,
      );

      return fParseRawData(vWeatherApiData);
    }

    public async faGetWeatherDataByCoords(vCoords: LocationI): Promise<WeatherDataI> {
      const vWeatherApiData = await faRequestDataFromURL(
        `${this.sWeatherApiUrl}data/2.5/weather?units=metric&lat=${vCoords.lat}&lon=${vCoords.lon}&appid=${this.sWeatherApiKey}`,
      );

      return fParseRawData(vWeatherApiData);
    }
}
