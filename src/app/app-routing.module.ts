import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./components/weather/weather.component";
import {ForecastComponent} from "./components/forecast/forecast.component";

const routes: Routes = [
    {
        path: '',
        component: WeatherComponent
    },
    {
        path: 'forecast/:zipCode',
        component: ForecastComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
