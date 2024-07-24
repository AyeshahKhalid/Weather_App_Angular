import { Injectable } from "@angular/core";
import { getCharts, getChartsLoaded, getChartsLoading, RootReducerState } from "./store/root-reducer";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { ChartListRequestAction, ChartListSuccessAction } from "./store/action";
import { WeatherService } from "./services/weather.service";

@Injectable({providedIn: 'root'})
export class StateUtils {
    constructor(private store: Store<RootReducerState>,private weatherService: WeatherService, ) {}
 
 
    getChartList(force:boolean,qP:any):[Observable<boolean>,Observable<any>] {
    const loading$ = this.store.select(getChartsLoading);
    const loaded$ = this.store.select(getChartsLoaded);
    const chartsData = this.store.select(getCharts);
    combineLatest([loaded$, loading$]).subscribe((data) => {
        if (!data[0] && !data[1] || force) { //get data from api only if data is not loaded or loading, or force is true
          force=false;
          this.store.dispatch(new ChartListRequestAction());
          let datas=this.weatherService.getWeatherData(qP)
                // this.isLoading = false;
                console.log("data from api",datas);
                this.store.dispatch(new ChartListSuccessAction({ chartdata: datas }));
               
            
            
          // this.weatherService.getWeatherData(qP).subscribe(
          //   (data) => {
          //     console.log("data from api",data);
          //     this.isLoading = false;
          //     this.store.dispatch(
          //       new ChartListSuccessAction({ chartdata: data })
          //     );
          //   },
          //   (error) => {
          //     this.isLoading = false;
          //     console.error('Request error', error);
          //   }
          // );
  
        }
      });
      return [loaded$,chartsData];
 }
}

//dependency injection principle is used here to inject the store and weather service in the constructor
//component -> state-utils -> store,weather service -> http service -> http client 