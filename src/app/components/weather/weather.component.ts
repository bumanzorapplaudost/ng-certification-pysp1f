import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location: string;
  locationList: number[] = [];

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
  }

  removeLocation(zipCode: number) {
    this.locationList = this.locationList.filter(zip => zipCode !== zip);
    localStorage.setItem('zipCodes', JSON.stringify(this.locationList));
  }
}
