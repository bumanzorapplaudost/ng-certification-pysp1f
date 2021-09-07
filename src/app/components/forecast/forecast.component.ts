import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import { getImageUrl } from '../../utils/getImageUrl';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  zipCode: number;
  data: any;

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
      .subscribe(r => {
        console.log(r);
        this.data = r;
      });
  }

  getImage(status: string) {
    return getImageUrl(status);
  }
}
