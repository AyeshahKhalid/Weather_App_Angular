import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf, JsonPipe, NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { currentDate, convertDate } from '../../utlis';
import { ChartComponent } from '../../components/chart/chart.component';
import * as _ from 'underscore';

import { StateUtils } from '../../state-utils';
@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    JsonPipe,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ChartComponent,
  ],
  providers: [],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss',
})
export class ViewModeComponent {
  place = 'London';
  weatherData: any;
  isLoading: boolean = false;
  disabledToday: boolean = false;
  qP = {
    q: this.place,
    lang: 'en',
    dt: currentDate,
    end_dt: currentDate,
  };
  range = new FormGroup({
    start: new FormControl(currentDate),
    end: new FormControl(currentDate),
  });
  constructor(private stateUtils: StateUtils) {
    //here delay the set place keyup call api
    this.setPlace = _.debounce(this.setPlace, 1000);
  }

  ngOnInit() {
    this.getWeatherData(false, this.qP);
    this.fillData();
  }
  fillData() {
    const data = this.weatherData?.forecast?.forecastday;
    if(data.length){
    
    this.place = this.weatherData?.location?.name || 'London';
    this.range = new FormGroup({
      start: new FormControl(data ? data[0].date : currentDate),
      end: new FormControl(data ? data[data.length - 1].date : currentDate),
    });
  }
  }
  getWeatherData(force: boolean, qP: any): any {
    const weatherData$ = this.stateUtils.getChartList(force, qP)[1];
    weatherData$.subscribe((data) => {
      this.weatherData = data;
    });
    const load$ = this.stateUtils.getChartList(force, qP)[0];
    load$.subscribe((data) => {
      this.isLoading = data;
    });
  }

  setPlace = (e: any) => {
    this.qP = { ...this.qP, q: e.target.value };
    this.getWeatherData(true, this.qP);
  };

  // we need a btn that check whether today iis c current date
  checkedDisabledToday = ({ start, end }: any): boolean => {
    if (
      convertDate(start) === currentDate &&
      convertDate(end) === currentDate
    ) {
      // console.log(
      //   'not today',
      //   convertDate(start) === currentDate,
      //   convertDate(start),
      //   currentDate
      // );
      return (this.disabledToday = true);
    } else {
      return (this.disabledToday = false);
    }
  };

  dateRangeChangeEmit = (
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) => {
    //when we select range start  it will log , then if select the range end, will log again
    //we need to force only log the final range start and end
    if (dateRangeStart.value !== '' && dateRangeEnd.value !== '') {
      // this.dateRangeChange.emit([dateRangeStart.value, dateRangeEnd.value]);
      const start = dateRangeStart.value;
      const end = dateRangeEnd.value;
      this.checkedDisabledToday({ start, end });
      // console.log([start, end]);
      this.qP = {
        ...this.qP,
        dt: start,
        end_dt: end,
      };
      this.getWeatherData(true, this.qP);
    }
  };

  handleToday() {
    //here we set the date range for today
    this.range.setValue({
      start: currentDate,
      end: currentDate,
    });
    //
    // console.log('handletoday func', this.range.value, [
    //   currentDate,
    //   currentDate,
    // ]);
    //don't want the user keep clicking today, we will enhance that by disble the button
    this.disabledToday = true;
    this.qP = { ...this.qP, dt: currentDate, end_dt: currentDate };
    this.getWeatherData(true, this.qP);
  }

  //according to api limitation, we can only fetch 7 days ago and 2 days later data
  //so here we need to limit user to select the range
  //so we use angular material datefilter for it
  limitDaysAgo = (days: number): Date => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - days));
  };
  limitDaysAfter = (days: number): Date => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + days));
  };
  dateFilterFn = (d: Date): boolean => {
    //prevent 8 days ago and 3 days later from being selected
    return d >= this.limitDaysAgo(8) && d <= this.limitDaysAfter(2);
  };
}
