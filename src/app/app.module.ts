import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherComponent } from './components/weather/weather.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, ForecastComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
