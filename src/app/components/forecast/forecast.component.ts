import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  zipCode: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('zipCode')) {
        this.zipCode = Number(params.get('zipCode'));
      }
    });
  }

  getFiveDayForecast(zipCode: number) {
    this.weatherService.getFullForecast(zipCode).subscribe(info => {
      console.log(info);
    });
  }
}
