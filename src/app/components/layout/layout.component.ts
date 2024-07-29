import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  // Is user logged in?
  
  constructor(private authService: AuthService, private router: Router) {

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
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.router.navigate(['/browse'], { queryParams: { q: searchTerm } });
    
  }
  
}
