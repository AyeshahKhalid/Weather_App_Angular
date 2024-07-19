import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
  ],
  providers: [],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss'
})

export class ViewModeComponent {
  constructor(private weatherService: WeatherService) { }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    console.log('ViewModeComponent initialized');
    // this.getWeatherData();
  }
  getWeatherData(): void {
    this.weatherService.getWeatherData().subscribe(data => {
      console.log(data);
    }, error => {
      console.error('Request error', error);
    });
  }
}