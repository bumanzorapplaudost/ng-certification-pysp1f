import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherInfo } from '../../types/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location: string;
  locationList: number[] = [];
  weatherInfo: (WeatherInfo & { zipCode: number })[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    if (localStorage.getItem('zipCodes')) {
      this.getLocations();
    } else {
      localStorage.setItem('zipCodes', JSON.stringify([]));
    }
  }

  addLocation() {
    const locations = JSON.parse(localStorage.getItem('zipCodes'));
    localStorage.setItem(
      'zipCodes',
      JSON.stringify([...locations, Number(this.location)])
    );
    this.location = '';
    this.getLocations();
  }

  getLocations() {
    this.locationList = JSON.parse(localStorage.getItem('zipCodes'));
    const requestList = this.locationList.map(zipCode =>
      this.weatherService.getByZip(zipCode)
    );
    forkJoin(requestList).subscribe(req => {
      this.weatherInfo = req.map((item, idx) => ({
        ...item,
        zipCode: this.locationList[idx]
      }));
    });
  }

  removeLocation(zipCode: number) {
    this.locationList = this.locationList.filter(zip => zipCode !== zip);
    this.weatherInfo = this.weatherInfo.filter(
      weather => weather.zipCode !== zipCode
    );
    localStorage.setItem('zipCodes', JSON.stringify(this.locationList));
  }
}
