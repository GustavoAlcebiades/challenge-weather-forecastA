import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  
  apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?APPID=6c6c4b01fa3425e684a1127ac138db23&q="; 
  cidade: string = "";
  
  humidade: string ;
  temperatura: number;
  minima: number;
  maxima:  number;
  
  humi: string;
  temp: string;
  min: string;
  max: string;

  graus: string;


  constructor(private http : Http) { }

  previsaoTempo() {

    this.humi = "Humidade:";
    this.temp = "Temperatura:";
    this.min = "Minima:";
    this.max = "Máxima:";
    this.graus = "ºC"
    

    this.http.get(this.apiUrl + this.cidade )
    .subscribe(
      (res: Response) => {
        const previsaoCidade = res.json();

        this.humidade = previsaoCidade.main.humidity;
        this.temperatura = this.converteParaCelsius(previsaoCidade.main.temp);
        this.maxima = this.converteParaCelsius(previsaoCidade.main.temp_max);
        this.minima = this.converteParaCelsius(previsaoCidade.main.temp_min);
      }
    )
  }

  converteParaCelsius(tempFar : number)
  {
    let resultado = 0;
    return resultado = (tempFar - 273.15);
  }
}