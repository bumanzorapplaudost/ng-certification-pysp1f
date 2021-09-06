import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherInfo } from '../../interfaces/weather.interface';
import { weatherImages } from '../../utils/images';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() cardInfo: WeatherInfo & { zipCode: number };

  @Output() cardRemoved = new EventEmitter();
  image: string;

  constructor() {}

  ngOnInit() {
    if (!this.cardInfo) {
      this.image = '';
      return;
    }
    switch (this.cardInfo.weather[0].main) {
      case 'Drizzle':
      case 'Rain': {
        this.image = weatherImages.rain;
        break;
      }
      case 'Clouds': {
        this.image = weatherImages.clouds;
        break;
      }
      case 'Clear': {
        this.image = weatherImages.sun;
        break;
      }
      default: {
        this.image = weatherImages.snow;
        break;
      }
    }
  }

  removeCard() {
    this.cardRemoved.emit(this.cardInfo.zipCode);
  }
}
