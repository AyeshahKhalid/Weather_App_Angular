import { ActionReducerMap, createSelector } from '@ngrx/store';
// import { ChartOptionsReducer, ChartOptionsReducerState } from "./reducers";
import * as fromReducerFile from './reducers';
import  {ChartOptionsReducerState}  from '../models/weather-data.model';

export interface RootReducerState {
  charts: ChartOptionsReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  charts: fromReducerFile.ChartOptionsReducer,
};

export const getChartsState = (state: RootReducerState) => state.charts;



export const getChartsLoaded = createSelector(getChartsState, fromReducerFile.getChartsLoaded);
export const getChartsLoading = createSelector(getChartsState, fromReducerFile.getChartsLoading);
export const getCharts = createSelector(getChartsState, fromReducerFile.getCharts);

