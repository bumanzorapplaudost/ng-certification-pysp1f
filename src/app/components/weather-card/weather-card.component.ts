import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfo } from '../../types/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() cardInfo: WeatherInfo;

  constructor() {}

  ngOnInit() {}
}
