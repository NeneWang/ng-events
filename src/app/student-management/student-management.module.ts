import { StudentCardComponent } from './../student-card/student-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListSubsComponent } from '../student-list-subs/student-list-subs.component'; // Import FormsModule

import { StudentDetailComponent } from '../pages/student-detail/student-detail.component';
import { StudentListObsComponent } from '../student-list-obs/student-list-obs.component';


import { StudentsScreenComponent } from '../pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from '../pages/courses-screen/courses-screen.component';
import { HomeScreenComponent } from '../pages/home-screen/home-screen.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { CourseFormComponent } from '../course-form/course-form.component';
import { CourseListComponent } from '../course-list/course-list.component';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';

import { SharedModule } from '../shared/shared.module';
import { FullNamePipe } from '../full-name.pipe';
import { Font20Directive } from '../font20.directive';
import { AcademicStatusPipe } from '../academic-status.pipe';

@NgModule({
  declarations: [
    StudentListSubsComponent,
    StudentDetailComponent,
    StudentListObsComponent,
    StudentsScreenComponent,
    CoursesScreenComponent,
    HomeScreenComponent,
    StudentListComponent,
    CourseFormComponent,
    CourseListComponent,
    UserFormComponent,
    FullNamePipe,
    Font20Directive,
    AcademicStatusPipe,
    StudentCardComponent,
    UserEditFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,


  ],
  exports: [
    StudentListSubsComponent,
    StudentDetailComponent,
    StudentListObsComponent,
    StudentsScreenComponent,
    CoursesScreenComponent,
    HomeScreenComponent,
    StudentListComponent,
    CourseFormComponent,
    CourseListComponent,
    UserFormComponent,
    FullNamePipe,
    Font20Directive,
    AcademicStatusPipe,
    StudentCardComponent,
    UserEditFormComponent,
  ]
})
export class StudentManagementModule { }
