import { Action } from './action';
import { CHART_DELETE_ACTION, CHART_LIST_REQUEST, CHART_LIST_SUCCESS } from './constant';

export interface ChartOptionsReducerState {
  loading: boolean;
  loaded: boolean;
  charts: any[];
}

const initialState: ChartOptionsReducerState = {
  loading: false,
  loaded: false,
  charts: [],
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
      const updatedChart = action.payload.chartdata;
      return { ...state, loading: false, loaded: true, charts: updatedChart };
    }
    case CHART_DELETE_ACTION:{
      const updatedChart = state.charts.filter((item) => item.forecast?.forecastday.date_epoch !== action.payload.id);
      return { ...state, charts: updatedChart };
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
