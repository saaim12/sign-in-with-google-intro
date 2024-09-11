import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator()
    });

    this.initializeGoogleSignIn();
  }

  // Custom validator to check if the password and confirmPassword match
  passwordMatchValidator() {
    return (formGroup: FormGroup) => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  // Initialize Google Sign-Up
  initializeGoogleSignIn(): void {
    google.accounts.id.initialize({
      client_id: 'YOUR CLIENT ID',
      callback: (response: any) => this.handleGoogleSignIn(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signup-btn'),
      { theme: 'outline', size: 'large' }
    );
  }

  // Handle Google Sign-Up response
  handleGoogleSignIn(response: any): void {
    try {
      const token = response.credential;
      const decodedToken = jwt_decode.jwtDecode(token) as { email: string,name:string };
      console.log(decodedToken)
      localStorage.setItem('userEmail', decodedToken.email);
     localStorage.setItem('name',decodedToken.name);
     this.signupForm.patchValue({ email: decodedToken.email })
     this.signupForm.patchValue({ firstName: decodedToken.name })
     
      console.log('Google Sign-Up successful, email:', decodedToken.email);
    } catch (error) {
      console.error('Error decoding Google token:', error);
    }
  }

  // Form submission for email/password sign-up
  submitForm(): void {
    if (this.signupForm.valid) {
      const firstName = this.signupForm.get('firstName')?.value;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;

      // Save details to local storage (for demo purposes)
      localStorage.setItem('userFirstName', firstName);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      this.router.navigate(['/login']);
      console.log('Sign-up successful with email and password.');
    }
  }
}
