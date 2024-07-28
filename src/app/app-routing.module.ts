import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutScreenComponent } from './pages/about-screen/about-screen.component';
import { StudentsScreenComponent } from './pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';


const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  {
    path: 'students', component: StudentsScreenComponent,
    children: [
      { path: 'detail/:id', component: StudentDetailComponent },
    ]
  },
  {
    path: 'students/:id', component: StudentDetailComponent
  },
  { path: 'courses', component: CoursesScreenComponent },
  { path: 'about', component: AboutScreenComponent },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
