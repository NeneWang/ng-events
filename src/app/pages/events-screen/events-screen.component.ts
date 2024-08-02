import { Component } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};




@Component({
  selector: 'app-events-screen',
  templateUrl: './events-screen.component.html',
  styleUrls: ['./events-screen.component.scss']
})
export class EventsScreenComponent   {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Analysis",
              y: [
                new Date("2019-02-27").getTime(),
                new Date("2019-03-04").getTime()
              ],
              fillColor: "#008FFB"
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime()
              ],
              fillColor: "#00E396"
            },
            {
              x: "Coding",
              y: [
                new Date("2019-03-07").getTime(),
                new Date("2019-03-10").getTime()
              ],
              fillColor: "#775DD0"
            },
            {
              x: "Testing",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime()
              ],
              fillColor: "#FEB019"
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-17").getTime()
              ],
              fillColor: "#FF4560"
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: (string | number | Date)[], opts: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
          const label = opts.w.globals.labels[opts.dataPointIndex];
          const a = new Date(val[0]);
          const b = new Date(val[1]);
          const diff = Math.ceil((Number(b) - Number(a)) / (1000 * 60 * 60 * 24));
          return label + ": " + diff + (diff > 1 ? " days" : " day");
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ["#f3f4f5", "#fff"],
          opacity: 1
        }
      }
    };
  }

  
}