import { Coordinates, Weather } from './weather.interface';

export interface ForecastTemperature {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface ForecastCity {
  coord: Coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  timezone: number;
}

export interface ForecastDay {
  clouds: number;
  deg: number;
  dt: number;
  feels_like: any;
  gust: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: ForecastTemperature;
  weather: Weather[];
}

export interface ForecastData {
  city: ForecastCity;
  cnt: number;
  cod: string;
  list: ForecastDay[];
  message: number;
}
