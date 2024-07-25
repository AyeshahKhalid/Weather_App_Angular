import { chart } from 'highcharts';
import { Action } from './action';
import {
  CHART_DELETE_ACTION,
  CHART_LIST_REQUEST,
  CHART_LIST_SUCCESS,
  CHART_UPDATE_ACTION,
} from './constant';
import { ChartOptionsReducerState } from '../models/weather-data.model';



const initialState: ChartOptionsReducerState = {
  loading: false,
  loaded: false,
  charts: {
    location: {}, // Initialize according to the actual structure of location data
    forecast: {
      forecastday: [], // Initialize as an empty array for forecast days
    },
  },
};

export function ChartOptionsReducer(
  state = initialState,
  action: Action
): ChartOptionsReducerState {
  switch (action.type) {
    case CHART_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case CHART_LIST_SUCCESS: {
      // const updatedChart = state.charts.concat(action.payload.chartdata);
      let updatedChart = action.payload.chartdata;
      //add two more key to the forecastday array
      updatedChart = {
        ...updatedChart,
        forecast: {
          ...updatedChart.forecast,
          forecastday: updatedChart.forecast.forecastday.map((item: any) => ({
            ...item,
            chart_type: 'line',
            chart_color: 'blue',
            chart_name: item.astro.moon_phase,
          })),
        },
      };
      return { ...state, loading: false, loaded: true, charts: updatedChart };
    }
    case CHART_DELETE_ACTION: {
      const { location, forecast } = state.charts;
      // Perform the filtering on forecastday
      const updatedForecastDay = forecast.forecastday.filter(
        (item) => item.date_epoch !== action.payload.id
      );
      return {
        ...state,
        charts: {
          location, // Keep the location as it is
          forecast: {
            ...forecast, // Keep the forecast as it is
            forecastday: updatedForecastDay, // Update only the forecastday
          },
        },
      };
    }
    case CHART_UPDATE_ACTION: {
      const { location, forecast } = state.charts;
      // Perform the filtering on forecastday
      const updatedForecastDay = forecast.forecastday.map((item) => item.date_epoch === action.payload.data.date_epoch
        ? {...item, ...action.payload.data}
        : item
      );
      return {
        ...state,
        charts: {
          location, // Keep the location as it is
          forecast: {
            ...forecast, // Keep the forecast as it is
            forecastday: updatedForecastDay, // Update only the forecastday
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}

//selector
export const getCharts = (state: ChartOptionsReducerState) => state.charts;
export const getChartsLoading = (state: ChartOptionsReducerState) =>
  state.loading;
export const getChartsLoaded = (state: ChartOptionsReducerState) =>
  state.loaded;
