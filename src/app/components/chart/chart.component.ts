import { Component, Input } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';
import { calData } from '../../utlis';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() day: any;
  chartOption: any;

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.chartOption = new Chart({
      chart: {
        type: this.day?.chart_type,
      },
      title: {
        text: this.day?.chart_name,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        title: {
          text: 'Time',
        },
        type: 'datetime', // Use 'datetime' to handle timestamps
        labels: {
          format: '{value:%H:%M}', // Display time in HH:MM format
        },
      },
      yAxis: {
        title: {
          text: 'Celsius',
        },
      },
      subtitle: {
        text: this.day?.date,
      },
      series: [
        {
          name: 'Temperature',
          color: this.day?.chart_color,
          data: calData(this.day?.hour),
          marker: {
            enabled: true,
          },
          tooltip: {
            pointFormat: `{point.tooltip.pointFormat}`,
          },
        } as any,
      ],
    });
  }
}

