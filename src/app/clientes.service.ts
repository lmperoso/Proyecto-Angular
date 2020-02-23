import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(public http: HttpClient) {

  }
  peticionArticulos(cat): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=0bd11fec6b16498ab32850dd2fb9c5a9&category=' + cat + '');
  }
  // 88fae1b73328bd4a7d7e8ed03657ad05
  pedirTiempo(ciudad): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?' +
      'q=' + ciudad + '&units=metric&' +
      'appid=88fae1b73328bd4a7d7e8ed03657ad05');

  }




}