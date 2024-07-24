import {Action as NgRxAction} from '@ngrx/store';
import { CHART_DELETE_ACTION, CHART_LIST_REQUEST, CHART_LIST_SUCCESS } from './constant';


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

//payload mai chart data aaega
export interface Action extends NgRxAction{
payload?:any;
}
