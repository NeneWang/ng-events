import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  // Is user logged in?
  
  constructor(private authService: AuthService) {

  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  getAuthName(): string{
    return this.authService.getAuthUserData().name;
  }

  logout(): void {
    this.authService.logout()
  }

}
