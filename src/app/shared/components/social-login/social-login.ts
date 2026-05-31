import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login',
  standalone: true,
  templateUrl: './social-login.html',
  styleUrl: './social-login.scss'
})
export class SocialLoginComponent {
  loginWithGoogle(): void {
    console.log('Google login clicked — wire up later');
  }
}
