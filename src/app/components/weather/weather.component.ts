import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherInfo } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location = '';
  locationList: number[] = [];
  weatherInfo: (WeatherInfo & { zipCode: number })[] = [];
  showErrorMessage = false;
  errorMessage: string;

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
    
    const zipCode = Number(this.location);
    this.location = '';


    this.weatherService.getByZip(zipCode).subscribe(info => {
      localStorage.setItem(
        'zipCodes',
        JSON.stringify([...(locations ?? []), Number(this.location)])
      );
      this.weatherInfo = [
        ...this.weatherInfo,
        {
          ...info,
          zipCode
        }
      ];
    }, () => {
      this.showErrorMessage = true;
      this.errorMessage = 'Invalid ZIP code.';
      setTimeout(() => {
        this.showErrorMessage = false;
        this.errorMessage = '';
      }, 5000)
    });
  }

  getLocations(): void {
    this.locationList = JSON.parse(localStorage.getItem('zipCodes'));
    const requestList = this.locationList.map(zipCode =>
      this.weatherService.getByZip(zipCode)
    );
    forkJoin(requestList).subscribe(req => {
      this.weatherInfo = req.map((item, index) => ({
        ...item,
        zipCode: this.locationList[index]
      }));
    });
  }

  removeLocation(zipCode: number): void {
    this.locationList = this.locationList.filter(zip => zipCode !== zip);
    this.weatherInfo = this.weatherInfo.filter(
      weather => weather.zipCode !== zipCode
    );
    localStorage.setItem('zipCodes', JSON.stringify(this.locationList));
  }

  clearLocations(): void {
    this.location = '';
    this.locationList = [];
    this.weatherInfo = [];
    this.showErrorMessage = false;
    localStorage.removeItem('zipCodes');
  }
}
