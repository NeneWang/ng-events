
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.local';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private isAuthenticated = false;

  private _authUser$ = new BehaviorSubject<any | null>(null);

  public authUser$ = this._authUser$.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(payload: LoginPayload): void {

    this.isAuthenticated = true;
    this.httpClient
      .post(
        `${environment.baseUrl}/login`,
        payload
      )
      .subscribe({
        next: (response) => {
          console.log('Login successful', response);
          console.log('Payload', payload);
          if (payload?.email !== null) {
            localStorage.setItem('email', payload.email);
            this.router.navigate(['/']);
          }

        },
        error: (err) => {
          alert('Error de conexion');
        },
      });

  }


  signup(loginPayload: SignupPayload): void {
    this.isAuthenticated = true;
    this.httpClient.post(`${environment.baseUrl}/signup`, loginPayload).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        if (loginPayload.email !== null) {
          localStorage.setItem('email', loginPayload.email);
        }

        this.router.navigate(['/']);  // Navigate on success
      },
      error: (error) => {
        console.error('Signup error', error);
        // this.errorService.showError('Signup failed: ' + error.message);  // Show error message
      },
    });
  }


  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }


  isAuthenticatedUser(): boolean {
    if (localStorage.getItem('email')) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  getAuthUserData(): any {

    /**
     * email
     * name
     */
    const data = {
      email: this._authUser$.value.email,
      name: this._authUser$.value.name
    }
    return data;
  }
}

const MOCKAPI = 'https://645a796665bd868e931c34ee.mockapi.io/';

export interface LoginPayload {
  email: string | null;
  password: string | null;
}

export interface SignupPayload {
  email: string | null;
  password: string | null;
  re_password: string | null;
  first_name: string | null;
  last_name: string | null;
  agree: boolean | null;
}

