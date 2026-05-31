import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCardComponent {
  @Input() course!: Course;
}
