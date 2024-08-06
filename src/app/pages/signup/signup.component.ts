import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  rePasswordControl = new FormControl('', [Validators.required]);
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  agreeControl = new FormControl(false, [Validators.requiredTrue]);

  signupForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    re_password: this.rePasswordControl,
    first_name: this.firstNameControl,
    last_name: this.lastNameControl,
    agree: this.agreeControl
  }, { validators: this.passwordMatchValidator() });

  constructor(private authService: AuthService, private router: Router) { }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const re_password = control.get('re_password')?.value;
      return password === re_password ? {mismatch: false} : { mismatch: true };
    };
  }

  signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
    } else {
      const formData = this.signupForm.getRawValue();
      console.log('Form Data:', formData);

      this.authService.signup(formData);
    }
  }
}
