import { Component } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

}
