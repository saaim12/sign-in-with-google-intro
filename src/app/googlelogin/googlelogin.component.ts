declare var google:any;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.scss']
})
export class GoogleloginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}
  ngOnInit(): void {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    this.loginForm = this.fb.group({
      email: [storedEmail || '', [Validators.required, Validators.email]],
      password: [storedPassword || '', [Validators.required, Validators.minLength(6)]]
    });
    this.initializeGoogleSignIn();
  }

  // This is the callback function referenced in the data-callback attribute
  handleGoogleSignIn(response: any): void {
    console.log('Google Sign-In Response:', response);

    try {
      const token = response.credential;
      const decodedToken = jwt_decode.jwtDecode(token) as { email: string };

      // Save the email to local storage
      localStorage.setItem('userEmail', decodedToken.email);
      this.loginForm.patchValue({ email: decodedToken.email });
      console.log('User email saved to local storage:', decodedToken.email);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  initializeGoogleSignIn(): void {
    google.accounts.id.initialize({
      client_id: '771701669694-i2g5642noqq9r20rlbu1uc3ve2jmeei1.apps.googleusercontent.com',
      callback: this.handleGoogleSignIn.bind(this) // Ensure the correct context for `this`
    });

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle'
      }
    );
  }
}
