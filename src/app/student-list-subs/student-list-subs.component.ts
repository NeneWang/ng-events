import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { StudentsService, Student } from '../students.service';

@Component({
  selector: 'app-student-list-subs',
  templateUrl: './student-list-subs.component.html',
  styleUrls: ['./student-list-subs.component.scss']
})

export class StudentListSubsComponent {
  students: Student[] = [];
  studentsSubscription: Subscription | undefined;

  constructor(private studentsService: StudentsService) {
    this.studentsSubscription = this.studentsService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private unsubscribe() {
    // Unsubscribe from the subscription when the component is destroyed
    if (this.studentsSubscription) {
      this.studentsSubscription.unsubscribe();
      this.studentsSubscription = undefined; // Set it to undefined
    }
  }
}