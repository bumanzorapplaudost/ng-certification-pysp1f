import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiUrl = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private httpClient: HttpClient) {}

  getByZip(zip: number) {
    return this.httpClient.get(this.weatherUrl, {
      params: {
        zip: `${zip}`,
        apiUrl: this.apiUrl
      }
    });
  }
}
