import { Component, Input, Output, EventEmitter, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() editCourseEvent = new EventEmitter<Course>();
  @Output() deleteCourseEvent = new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'major', 'course_number', 'credits', 'actions'];
  dataSource: MatTableDataSource<Course>;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes['courses'] && changes['courses'].currentValue) {
      this.dataSource = new MatTableDataSource(this.courses);
    }
  }
  constructor() {
    this.dataSource = new MatTableDataSource(this.courses)

  }

  addCourse() {
    this.dataSource._updateChangeSubscription();
  }

  editCourse(course: Course) {
    this.editCourseEvent.emit(course);
    this.dataSource._updateChangeSubscription();
  }

  deleteCourse(course: number) {

    this.deleteCourseEvent.emit(course);
    this.dataSource._updateChangeSubscription();
  }

}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}
