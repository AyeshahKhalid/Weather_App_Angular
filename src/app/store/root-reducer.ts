import { ActionReducerMap, createSelector } from '@ngrx/store';
// import { ChartOptionsReducer, ChartOptionsReducerState } from "./reducers";
import * as fromReducerFile from './reducers';
import { create } from 'underscore';

export interface RootReducerState {
  charts: fromReducerFile.ChartOptionsReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  charts: fromReducerFile.ChartOptionsReducer,
};

export const getChartsState = (state: RootReducerState) => state.charts;



export const getChartsLoaded = createSelector(getChartsState, fromReducerFile.getChartsLoaded);
export const getChartsLoading = createSelector(getChartsState, fromReducerFile.getChartsLoading);
export const getCharts = createSelector(getChartsState, fromReducerFile.getCharts);

