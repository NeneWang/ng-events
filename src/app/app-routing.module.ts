import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutScreenComponent } from './pages/about-screen/about-screen.component';
import { StudentsScreenComponent } from './pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';

import { BrowseScreenComponent } from './pages/browse-screen/browse-screen.component';
import { ExploreScreenComponent } from './pages/explore-screen/explore-screen.component';
import { VlogsScreenComponent } from './pages/vlogs-screen/vlogs-screen.component';
import { ShrinesScreenComponent } from './pages/shrines-screen/shrines-screen.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventsScreenComponent } from './pages/events-screen/events-screen.component';


const routes: Routes = [
  // { path: '', component: HomeScreenComponent },
  { path: '', component: ExploreScreenComponent },
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
  },
  {
    path: 'browse', component: BrowseScreenComponent
  },
  {
    path: 'vlog', component: VlogsScreenComponent
  },
  {
    path: 'shrine', component: ShrinesScreenComponent
  },
  { path: 'profile/:username', component: ProfileComponent },
  {
    path: 'event', component: EventsScreenComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
