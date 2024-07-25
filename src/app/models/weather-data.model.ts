export interface Forecast {
  forecastday: any[];
}
export interface ChartData {
  location: any;
  forecast: Forecast;
}
export interface ChartOptionsReducerState {
  loading: boolean;
  loaded: boolean;
  charts: ChartData;
}