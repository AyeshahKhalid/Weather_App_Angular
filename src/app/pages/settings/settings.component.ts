import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'underscore';
import { StateUtils } from '../../state-utils';
import { NgFor, NgIf } from '@angular/common';
import { ChartComponent } from '../../components/chart/chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ModalWindowComponent } from '../../components/modal-window/modal-window.component';
import { Forecast } from '../../store/reducers';
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
    private route: ActivatedRoute,
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
    console.log('settingg', this.weatherData);
  }
  goToSetting(day: Forecast) {
    console.log('goToSetting');

    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: day,
      // data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }
  DeleteChart(id: number) {
    this.stateUtils.deleteChart(id);
  }
}
