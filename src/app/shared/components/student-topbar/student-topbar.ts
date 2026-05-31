import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-topbar.html',
  styleUrl: './student-topbar.scss'
})
export class StudentTopbarComponent {
  studentName = 'Yuki Tanaka';
  studentLevel = 'N4 Student';
  notificationCount = 3;
}
