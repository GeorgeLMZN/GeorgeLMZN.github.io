/* eslint-disable camelcase */
export interface WeatherDataI {
    id: number;
    city: string;
    country: string;
    weather: string;
    icon_url: string;
    temp: string;
    feels_like: string;
    wind_speed: string;
    pressure: string;
    humidity: string;
    visibility: string;
}

export interface WeatherOrderInfoI {
    item_before: WeatherDataI,
    item: WeatherDataI
}

export interface WeatherDataIxI {
    [key: string]: WeatherDataI
}
