import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';

// import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AuthModule { }
