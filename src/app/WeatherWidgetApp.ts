import { LocationI } from './interface/LocationI';
import { WeatherDataI, WeatherOrderInfoI } from './interface/WeatherDataI';
import WeatherWidgetApiS from './service/WeatherWidgetApiS';
import WeatherWidgetLocationS from './service/WeatherWidgetLocationS';
import WeatherWidgetStorageS from './service/WeatherWidgetStorageS';
import WeatherWidgetSortDataS from './service/WeatherWidgetSortDataS';

class WeatherWidget {
    private weatherWidgetSortDataS: WeatherWidgetSortDataS;

    private weatherWidgetApiS: WeatherWidgetApiS;

    private weatherWidgetLocationS: WeatherWidgetLocationS;

    private weatherWidgetStorageS : WeatherWidgetStorageS;

    constructor() {
      this.weatherWidgetSortDataS = new WeatherWidgetSortDataS();
      this.weatherWidgetApiS = new WeatherWidgetApiS();
      this.weatherWidgetLocationS = new WeatherWidgetLocationS();
      this.weatherWidgetStorageS = new WeatherWidgetStorageS();
    }

    public saveData(data: Record<string, WeatherDataI>) {
      return this.weatherWidgetStorageS.saveData(data);
    }

    public getData(): Record<string, WeatherDataI> {
      return this.weatherWidgetStorageS.getData();
    }

    public getCurrentLocation(): Promise<LocationI> {
      return this.weatherWidgetLocationS.getCurrentLocation();
    }

    public async faGetWeatherDataByCoords(coords: LocationI): Promise<WeatherDataI> {
      return this.weatherWidgetApiS.faGetWeatherDataByCoords(coords);
    }

    public async faGetWeatherDataByCityName(sCity: string): Promise<WeatherDataI> {
      return this.weatherWidgetApiS.faGetWeatherDataByCityName(sCity);
    }

    public sortIxItemsByOrder(
      sortedInfo: WeatherOrderInfoI,
      ixListSortable: Record<string, WeatherDataI>,
    ): Record<string, WeatherDataI> {
      return this.weatherWidgetSortDataS.sortIxItemsByOrder(sortedInfo, ixListSortable);
    }
}

export const weatherWidget = new WeatherWidget();
