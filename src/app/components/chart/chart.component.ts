import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() chartTypes: any;
  @Input() day: any;
  chartOption: any;

  ngOnInit() {
    this.initChart();
    // console.log('this.chartOption===>', this.day);
  }

  initChart() {
    this.chartOption = new Chart({
      chart: {
        type: this.chartTypes,
        renderTo: this.day?.date_epoch 
      },
      title: {
        text: this.day?.astro?.moon_phase,
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
          color: '#FF0000',
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

  // updateChart() {
  //   if (this.chartOption) {
  //     const formattedData = this.formatChartData(this.weatherData);
  //     this.chartOption.series[0].setData(formattedData);
  //   } else {
  //     this.initChart();
  //   }
  // }

  // formatChartData(data: any) {
  //   return data.map((item: any) => [new Date(item.date).getTime(), item.value]);
  // }
}

