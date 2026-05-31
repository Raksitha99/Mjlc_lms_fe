import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo';
import { AuthTabsComponent } from '../../../shared/components/auth-tabs/auth-tabs';
import { SocialLoginComponent } from '../../../shared/components/social-login/social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LogoComponent,
    AuthTabsComponent,
    SocialLoginComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  activeTab = signal<'login' | 'register'>('login');

  loginData = { email: '', password: '' };

  registerData = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  showPassword = signal(false);

  constructor(private router: Router) {}

  onTabChange(tab: 'login' | 'register'): void {
    this.activeTab.set(tab);
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  onLogin(): void {
    // No service yet — navigate directly to dashboard
    this.router.navigate(['/student/dashboard']);
  }

  onRegister(): void {
    // No service yet — navigate directly to dashboard
    this.router.navigate(['/student/dashboard']);
  }
}
