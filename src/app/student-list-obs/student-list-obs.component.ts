
import { Component } from '@angular/core';
import { Student, StudentsService } from '../students.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-student-list-obs',
  templateUrl: './student-list-obs.component.html',
  styleUrls: ['./student-list-obs.component.scss']
})

export class StudentListObsComponent {

  students$: Observable<Student[]> | undefined;
  studentsFormatted$: Observable<StudentFormatted[]> | undefined;

  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.getStudents(); 
    this.studentsFormatted$ = this.students$.pipe(
      map(students => students.map(student => (
        {
          ...student,
          fullName: `${student.name} ${student.lastname}`
        }
      ))),
    );
  }

  ngOnDestory() {
    if (this.studentsService) {
      // this.studentsService.unsubscribe();
    }
  }


}


interface StudentFormatted extends Student {
  fullName: string;
}

