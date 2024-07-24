import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'underscore';
import { StateUtils } from '../../state-utils';
import { NgFor, NgIf } from '@angular/common';
import { ChartComponent } from '../../components/chart/chart.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [HeaderComponent,NgIf,
    NgFor,ChartComponent,MatButtonModule,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private route: ActivatedRoute,private stateUtils: StateUtils, ) {}
  place = 'London';
  weatherData: any;
  isLoading: boolean = false;


  ngOnInit() {
    this.getWeatherData(_);
  }
  getWeatherData(qP: any): any {
    const weatherData$=this.stateUtils.getChartList(false,_)[1]
    weatherData$.subscribe(data=>{
      this.weatherData = data;
    })
    console.log("settingg",this.weatherData)
  }
  goToSetting(){
    console.log("goToSetting")
  }
  DeleteChart(id:number){
    console.log("DeleteChart",id)
    
  }
}
