import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './student-sidebar.html',
  styleUrl: './student-sidebar.scss'
})
export class StudentSidebarComponent {

  navItems = [
    { label: 'Dashboard',    icon: '⊞',  route: '/student/dashboard' },
    { label: 'My Courses',   icon: '🎓', route: '/student/my-courses' },
    { label: 'Live Classes', icon: '📹', route: '/student/live-classes' },
    { label: 'Past Papers',  icon: '📄', route: '/student/past-papers' },
    { label: 'Buy Courses',  icon: '🛒', route: '/student/buy-courses' }
  ];

  constructor(private router: Router) {}

  onLogout(): void {
    this.router.navigate(['/auth/login']);
  }
}
