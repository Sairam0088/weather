import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  defaultMessage:string = ""
  weatherData?:WeatherData
  cityName:string = "Hyderabad"

constructor(private weatherService:WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
    this.weatherData= undefined
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
     this.cityName="";
     this.weatherData= undefined
     if(!this.weatherData){
      this.errorMessage()
     }
    }

  errorMessage(){
    this.defaultMessage = "Loading..."
    setTimeout(() => {
      this.defaultMessage = "Please enter correct location!"
    }, 2000);
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe((response)=>{
     if(response && response.current.temp_c){
      this.weatherData = response;
     }else{
      this.weatherData = undefined;
     }
      })
  }
}
