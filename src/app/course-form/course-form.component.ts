import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  courseForm: FormGroup;
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];

  @Output() courseAdd: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      course_number: ['', Validators.required],
      major: ['', Validators.required],
      credits: [3, Validators.required],
      description: ['']
    });
  }
  onsubmit() {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      this.courseAdd.emit(this.courseForm.value);
    }
  }
}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}