import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface Student {
  name: string;
  lastname: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];

  students: Student[] = [
    {
      "name": "John",
      "lastname": "Doe",
      "average": "9.2",
      "major": "Computer Science",
      "minor": "Mathematics",
      "credits": "120"
    },
    {
      "name": "Jane",
      "lastname": "Doe",
      "average": "8.7",
      "major": "Biology",
      "minor": "Chemistry",
      "credits": "90"
    },
    {
      "name": "Michael",
      "lastname": "Johnson",
      "average": "7.5",
      "major": "History",
      "minor": "Political Science",
      "credits": "75"
    }
  ]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getMajors() {
    return this.majors;
  }

  getStudents(): Observable<Student[]> {
    return of(this.students).pipe(delay(500));
  }


  getMajorsAsPromise(): Promise<string[] | undefined> {
    return of(this.majors).pipe(delay(500)).toPromise();
  }

  addStudent(student: Student) {
    this.students.unshift(student);
  }

  deleteStudent(student: Student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

}
