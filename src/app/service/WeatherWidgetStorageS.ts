/* eslint-disable class-methods-use-this */
import { WeatherDataI } from '../interface/WeatherDataI';

export default class WeatherWidgetStorageS {
  storageKey: string = process.env.VUE_APP_STORAGE_KEY;

  public saveData(data: Record<string, WeatherDataI>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public getData(): Record<string, WeatherDataI> {
    const data = localStorage.getItem(this.storageKey) || '{}';
    return JSON.parse(data);
  }
}
