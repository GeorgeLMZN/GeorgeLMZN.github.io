/* eslint-disable class-methods-use-this */
import { LocationI } from '../interface/LocationI';

export default class WeatherWidgetLocationS {
  getCurrentLocation(): Promise<LocationI> {
    return new Promise((resolve, reject) => {
      navigator.geolocation?.getCurrentPosition(
        (position) => resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
        (error) => reject(error),
        { maximumAge: 0 },
      );
    });
  }
}
