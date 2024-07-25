import {Action as NgRxAction} from '@ngrx/store';
import { CHART_DELETE_ACTION, CHART_LIST_REQUEST, CHART_LIST_SUCCESS, CHART_UPDATE_ACTION } from './constant';
import { ChartData, Forecast } from './reducers';


export class ChartListRequestAction {
  readonly type = CHART_LIST_REQUEST;
  
}

export class ChartListSuccessAction {
    readonly type = CHART_LIST_SUCCESS;
    constructor(public payload?: {chartdata:any}) {
    }
}

export class ChartDeleteAction {
  readonly type = CHART_DELETE_ACTION;
  constructor(public payload?:{id:number}){} 
}

export class ChartUpdateAction{
  readonly type = CHART_UPDATE_ACTION;
  constructor(public payload?:{data:Forecast}){}

}
//payload mai chart data aaega
export interface Action extends NgRxAction{
payload?:any;
}
