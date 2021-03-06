import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ForecastComponent,
    WeatherComponent,
    WeatherCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
