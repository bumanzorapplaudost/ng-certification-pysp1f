import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherInfo } from '../../types/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() cardInfo: WeatherInfo;
  @Input() zipCode: number;

  @Output() cardRemoved = new EventEmitter();
  image: string;

  constructor() {}

  ngOnInit() {
    if(!this.cardInfo) {
      this.image = '';
      return;
    }
    switch(this.cardInfo.weather[0].main) {
      case 'Rain': {
        this.image = 'https://www.angulartraining.com/images/weather/rain.png'
        break;
      }
      case 'Clouds': {
        this.image = 'https://www.angulartraining.com/images/weather/clouds.png';
        break;
      }
      case 'Clear': {
        this.image = 'https://www.angulartraining.com/images/weather/sun.png'
      }
    }
    
  }

  removeCard() {
    this.cardRemoved.emit(this.zipCode);
  }
}
