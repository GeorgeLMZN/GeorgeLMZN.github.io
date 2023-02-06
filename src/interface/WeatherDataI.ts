/* eslint-disable camelcase */
export interface WeatherDataI {
    id: number;
    weather: string;
    temp: string;
    icon_url: string;
    city: string;
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp_max: number;
    temp_min: number;
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
    visibility: number;
    country: string;
}

export interface WeatherOrderInfoI {
    item_before: WeatherDataI,
    item: WeatherDataI
}

export interface WeatherDataIxI {
    [key: string]: WeatherDataI
}
