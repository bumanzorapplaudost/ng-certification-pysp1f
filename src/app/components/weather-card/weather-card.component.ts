import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherInfo } from '../../interfaces/weather.interface';
import { getImageUrl } from '../../utils/getImageUrl';
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

  ngOnInit() {
    if (!this.cardInfo) {
      this.image = '';
      return;
    }

    this.image = getImageUrl(this.cardInfo.weather[0].main);
  }

  removeCard() {
    this.cardRemoved.emit(this.cardInfo.zipCode);
  }
}
