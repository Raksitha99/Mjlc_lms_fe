import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/components/student-sidebar/student-sidebar';
import { StudentTopbarComponent } from '../../shared/components/student-topbar/student-topbar';
import { FooterComponent } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    StudentSidebarComponent,
    StudentTopbarComponent,
    FooterComponent
  ],
  templateUrl: './student-layout.html',
  styleUrl: './student-layout.scss'
})
export class StudentLayoutComponent {}
