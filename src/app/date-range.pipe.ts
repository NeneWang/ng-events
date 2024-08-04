import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(start: number, end: number): string {
    const startDate = this.datePipe.transform(start, 'MMM d');
    const endDate = this.datePipe.transform(end, 'MMM d');
    return `${startDate} - ${endDate}`;
  }
}
