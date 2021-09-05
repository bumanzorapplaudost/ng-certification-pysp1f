import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../types/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private httpClient: HttpClient) {}

  getByZip(zip: number): Observable<WeatherInfo> {
    return this.httpClient.get<WeatherInfo>(this.weatherUrl, {
      params: {
        zip: `${zip}`,
        appid: this.apiKey,
        units: 'imperial'
      }
    });
  }
}
