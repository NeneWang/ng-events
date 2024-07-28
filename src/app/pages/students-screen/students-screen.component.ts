import { StudentsService, Student, StudentCreate } from './../../students.service';
import { Component, ViewChild } from '@angular/core';
import { StudentListComponent } from 'src/app/student-list/student-list.component';

@Component({
  selector: 'app-students-screen',
  templateUrl: './students-screen.component.html',
  styleUrls: ['./students-screen.component.scss']
})

export class StudentsScreenComponent {

  title = 'lista-alumnos';

  students: Student[] = [];

  constructor(private studentsService: StudentsService) {
    this.studentsService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }


  @ViewChild('studentList', { static: false }) studentList: StudentListComponent | undefined;

  onStudentAdded(student: StudentCreate) {
    this.studentsService.addStudent(student).subscribe(
      () => {
        // Handle 
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );

  }


  editStudent(student: Student, id: number) {
    console.log('Editing student:', student, id);

  }

  onDeleteStudent(id: number) {
    this.studentsService.deleteStudent(id).subscribe(
      () => {
        // Handle successful deletion if needed
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }
}