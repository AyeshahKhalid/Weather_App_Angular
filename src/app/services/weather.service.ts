import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { WeatherData } from '../models/weather-data.model';
import { environment } from '../../environments/environment.development';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(): Observable<any> {


    return this.http.get<any>(`${API_URL}/history.json`, {
      params: {
        q: 'London',
        lang: 'en',
        dt: '2024-07-16',
        end_dt: '2024-07-20'
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      }
    }).pipe(catchError(this.handleError));

  }
  handleError(error: any): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('Request error', error);
    return throwError(errorMessage);
  }
}
// getWeatherData(lat: number, lon: number, startDate: number, endDate: number): Observable<WeatherData[]> {
// const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

// this.http.get<any>(url).pipe(
//   map(response => {
//     return response.daily
//       .filter(day => day.dt >= startDate / 1000 && day.dt <= endDate / 1000)
//       .map(day => ({
//         date: new Date(day.dt * 1000),
//         value: day.temp.day
//       }));
//   })
// );