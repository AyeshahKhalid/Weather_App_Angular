import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import _ from 'underscore';
import { StateUtils } from '../../state-utils';
import { NgFor, NgIf } from '@angular/common';
import { ChartComponent } from '../../components/chart/chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ModalWindowComponent } from '../../components/modal-window/modal-window.component';
import { Forecast } from '../../models/weather-data.model';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    HeaderComponent,
    NgIf,
    NgFor,
    ChartComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(
    private stateUtils: StateUtils,
    public dialog: MatDialog
  ) {}
  place = 'London';
  weatherData: any;
  isLoading: boolean = false;

  ngOnInit() {
    this.getWeatherData(_);
  }
  getWeatherData(qP: any): any {
    const weatherData$ = this.stateUtils.getChartList(false, _)[1];
    weatherData$.subscribe((data) => {
      this.weatherData = data;
    });
    const load$ = this.stateUtils.getChartList(false, _)[0];
    load$.subscribe((data) => {
      this.isLoading = data;
    });
  }
  goToSetting(day: Forecast) {
     this.dialog.open(ModalWindowComponent, {
      data: day,
    });


  }
  DeleteChart(id: number) {
    this.stateUtils.deleteChart(id);
  }
}
