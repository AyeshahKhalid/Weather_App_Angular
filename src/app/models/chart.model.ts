import * as Highcharts from 'highcharts';
import { WeatherData } from './weather-data.model';

export interface Chart {
  id: number;
  name: string;
  type: string; // e.g., 'line', 'spline', 'area'
  color: string;
  data: WeatherData[];
  options: Highcharts.Options;
}