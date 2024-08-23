import { ArtshowService } from './../../services/artshow.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
} from 'ng-apexcharts';


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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockEventsData: any[] = [];
@Component({
  selector: 'app-events-screen',
  templateUrl: './events-screen.component.html',
  styleUrls: ['./events-screen.component.scss']
})
export class EventsScreenComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public chartOptions: any;
  public events = mockEventsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public events_calendar: any[] = [];
  public fillcolors = ['#008FFB', '#00E396', '#775DD0', '#FEB019', '#FF4560'];

  getRandomColor() {
    return this.fillcolors[Math.floor(Math.random() * this.fillcolors.length)];
  }


  constructor(artshowService: ArtshowService, private router: Router) {

    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    artshowService.getEvents().subscribe((events: any) => {
      // console.log('Events Data', this.events);
      this.events = events;
      // console.log('Events', this.events);

      // Date has to be converted to timestamp
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.events_calendar = this.events.map((event: any) => {
        return {
          title: event.title,
          x: event.title,
          y: [new Date(event.y[0]).getTime(), new Date(event.y[1]).getTime()],
          fillColor: this.getRandomColor(),
          img: event.image
        };
      });

      console.log('Events Calendar', this.events_calendar);

      // console.log('Raw Hardcoded Events', this.events);
      this.chartOptions = {
        series: [
          {
            data: this.events_calendar
          }
        ],
        chart: {
          height: 350,
          type: 'rangeBar'
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: function (val: [number, number], opts: { w: { globals: { labels: { [x: string]: any } } }; dataPointIndex: number }) {
            const label = opts.w.globals.labels[opts.dataPointIndex];
            const a = new Date(val[0]);
            const b = new Date(val[1]);
            const diff = Math.ceil((Number(b) - Number(a)) / (1000 * 60 * 60 * 24));
            return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
          },
          style: {
            colors: ['#f3f4f5', '#fff']
          }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          show: false
        },
        grid: {
          row: {
            colors: ['#f3f4f5', '#fff'],
            opacity: 1
          }
        }
      };
    });

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEventClick(event: any, slug: string) {
    // console.log(event, slug); // You can remove this line if you don't need to log the event
    this.router.navigate(['/event', slug]);
  }


}
