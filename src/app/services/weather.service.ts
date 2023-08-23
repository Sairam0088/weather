import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'?q='+cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidApiHostHeaderName, environment.XRapidApiHostHeaderValue)
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
    });
   }
}
