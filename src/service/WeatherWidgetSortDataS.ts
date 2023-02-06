/* eslint-disable class-methods-use-this */
import { WeatherDataI, WeatherOrderInfoI } from '@/interface/WeatherDataI';

export default class WeatherWidgetSortDataS {
  sortIxItemsByOrder(
    sortedInfo: WeatherOrderInfoI,
    ixListSortable: Record<string, WeatherDataI>,
  ): Record<string, WeatherDataI> {
    const ixWeather = {} as Record<string, WeatherDataI>;

    const ixListSortableClone = { ...ixListSortable };

    const orderToInsert = Object.values(ixListSortableClone).indexOf(sortedInfo.item_before);

    delete ixListSortableClone[sortedInfo.item.city];

    const aWeatherData: WeatherDataI[] = Object.values(ixListSortableClone);

    aWeatherData.splice(orderToInsert, 0, ixListSortable[sortedInfo.item.city]);

    aWeatherData.forEach((e) => {
      ixWeather[e.city] = e;
    });

    return ixWeather;
  }
}
