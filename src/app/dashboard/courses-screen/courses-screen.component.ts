import { Component, ViewChild } from '@angular/core';
import { CourseListComponent } from './../../course-list/course-list.component';
import { CoursesService } from 'src/app/courses.service';


@Component({
  selector: 'app-courses-screen',
  templateUrl: './courses-screen.component.html',
  styleUrls: ['./courses-screen.component.scss']
})
export class CoursesScreenComponent {


  courses: Course[] = [

  ]

  constructor(private courseService: CoursesService) {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }


  @ViewChild('courseList', { static: false }) courseList: CourseListComponent | undefined;

  onCourseAdded(course: Course) {
    this.courseService.addCourse(course);
    this.courseList?.addCourse();
  }

  editCourse(course: Course) {
    console.log('Editing course:', course);
  }

  deleteCourse(course: number) {

    // Find where the course number matches
    this.courseService.deleteCourse(course);

  }

}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}