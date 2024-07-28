import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  @Input() student: any;

  get numericAverage(): number {
    return parseFloat(this.student.average);
  }
}
