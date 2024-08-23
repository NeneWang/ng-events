import { ArtshowService } from './../../services/artshow.service';
import { Component, OnInit } from '@angular/core';
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

const mockEventsData = [
  {
    title: 'Landscape Painting',
    slug: 'landscape-painting',
    x: 'Landscape Painting',
    y: [
      new Date('2024-01-15').getTime(),
      new Date('2024-01-20').getTime()
    ],
    fillColor: '#008FFB',
    img: ""
  },
  {
    title: 'Abstract Art',
    slug: 'abstract-art',
    x: 'Abstract Art',
    y: [
      new Date('2024-02-05').getTime(),
      new Date('2024-02-10').getTime()
    ],
    fillColor: '#00E396',
    img: ""

  },
  {
    title: 'Sculpture Exhibition',
    slug: 'sculpture-exhibition',
    x: 'Sculpture Exhibition',
    y: [
      new Date('2024-03-01').getTime(),
      new Date('2024-03-05').getTime()
    ],
    fillColor: '#775DD0',
    img: ""
  },
  {
    title: 'Digital Art Show',
    slug: 'digital-art-show',
    x: 'Digital Art Show',
    y: [
      new Date('2024-03-10').getTime(),
      new Date('2024-03-15').getTime()
    ],
    fillColor: '#FEB019',
    img: ""
  },
  {
    title: 'Photography Exhibition',
    slug: 'photography-exhibition',
    x: 'Photography Exhibition',
    y: [
      new Date('2024-04-01').getTime(),
      new Date('2024-04-07').getTime()
    ],
    fillColor: '#FF4560',
    img: ""
  }
];

@Component({
  selector: 'app-events-screen',
  templateUrl: './events-screen.component.html',
  styleUrls: ['./events-screen.component.scss']
})
export class EventsScreenComponent {
  public chartOptions: any;
  public events = mockEventsData;

  constructor(artshowService: ArtshowService, private router: Router) {
    this.chartOptions = {
      series: [
        {
          data: mockEventsData
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

    const _events = artshowService.getEvents().subscribe((events: any) => {
      console.log('Events Data', this.events);
      this.events = events;
      console.log('Events', this.events);
    });

    console.log('Raw Hardcoded Events', this.events);

  }

  onEventClick(event: any, slug: string) {
    console.log(event, slug); // You can remove this line if you don't need to log the event
    this.router.navigate(['/event', slug]);
  }


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // ngOnInit(): void {}
}
