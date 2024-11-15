import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    // PrimeNG Modules
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    MessageModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() isActive = false;
  @Output() stateChange = new EventEmitter<boolean>();

  toggleState() {
    this.stateChange.emit(!this.isActive);
  }

  loginForm: FormGroup;
  loading = false;
  showError = false;

  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      // Implement your login logic here
      setTimeout(() => {
        this.loading = false;
        this.showError = true;
      }, 1000);
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  onGoogleLogin(): void {
    // Implement Google login
  }

  onFacebookLogin(): void {
    // Implement Facebook login
  }

  onForgotPassword(): void {
    // Implement forgot password logic
  }

  onRegister(): void {
    // Implement registration navigation
  }

}
