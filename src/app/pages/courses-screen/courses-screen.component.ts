import { Component, ViewChild } from '@angular/core';
import { CourseListComponent } from './../../course-list/course-list.component';
import { CourseCreate, CoursesService } from 'src/app/courses.service';


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

  onCourseAdded(course: CourseCreate) {

    console.log("Course added: ", course)
    this.courseService.addCourse(course).subscribe(
      () => {
        // Handle 
      },
      (error) => {
        console.error('Error adding course:', error);
      }
    )
  }

  editCourse(course: Course) {
    console.log('Editing course:', course);
  }

  deleteCourse(id_arg: number) {

    // Find where the course number matches
    console.log("Deleting course: ", id_arg)
    this.courseService.deleteCourse(id_arg);

  }

}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}