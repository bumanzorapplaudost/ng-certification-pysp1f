import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5';
  apiKey = '5a4b2d457ecbef9eb2a71e480b947604';
  params = {
    appid: this.apiKey,
    units: 'imperial'
  };

  constructor(private httpClient: HttpClient) {}

  getByZip(zip: number): Observable<WeatherInfo> {
    return this.httpClient.get<WeatherInfo>(`${this.weatherUrl}/weather`, {
      params: {
        zip: `${zip}`,
        ...this.params
      }
    });
  }

  getFullForecast(zipCode: number) {
    return this.httpClient.get(`${this.weatherUrl}/onecall`, {
      params: {
        ...this.params
      }
    });
  }
}
