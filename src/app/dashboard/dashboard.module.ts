import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { authGuard } from '../auth/auth.guard';

// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentManagementModule } from '../student-management/student-management.module';
import { CoursesScreenComponent } from './courses-screen/courses-screen.component';
import { StudentsScreenComponent } from './students-screen/students-screen.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardHomeComponent,
  },
  {
    path: 'students',
    // canActivate: [AuthGuard],
    component: StudentsScreenComponent,
  },
  {
    path: 'courses',
    // canActivate: [AuthGuard],
    component: CoursesScreenComponent,
  },
  {
    path: 'not-allowed',
    component: NotAllowedComponent
  },
  {
    path: '**',
    // canActivate: [AuthGuard], // Add AuthGuard here as well
    component: NotAllowedComponent, // Redirect to NotAllowedComponent when route is not matched
  },
];


@NgModule({
  imports: [
    // CommonModule,
    SharedModule,
    StudentManagementModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
  declarations: [
    NotAllowedComponent,
    CoursesScreenComponent,
    StudentsScreenComponent

  ],
})
export class DashboardModule { }


/**
 * 
    // children: [
    //   { path: 'child-route-1', component: ChildRoute1Component },
    //   { path: 'child-route-2', component: ChildRoute2Component },
    //   // Add more child routes as needed
    // ],
 */