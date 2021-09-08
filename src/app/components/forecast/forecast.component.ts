import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { ForecastData } from '../../interfaces/forecast.interface';
import { WeatherService } from '../../services/weather.service';
import { getImageUrl } from '../../utils/getImageUrl';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  zipCode: number;
  data: ForecastData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('zipCode')) {
        this.zipCode = Number(params.get('zipCode'));
        this.getFiveDayForecast();
      }
    });
  }

  getFiveDayForecast() {
    this.weatherService
      .getByZip(this.zipCode)
      .pipe(
        concatMap(data => {
          return this.weatherService.getFullForecast(data.name, this.zipCode);
        })
      )
      .subscribe(response => {
        this.data = response;
      });
  }

  getImage(status: string) {
    return getImageUrl(status);
  }
}
