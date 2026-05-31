import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-course-full-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-full-card.html',
  styleUrl: './course-full-card.scss'
})
export class CourseFullCardComponent {
  @Input() course!: Course;

  onPrimaryAction(): void {
    console.log('Primary action clicked for:', this.course.title);
    // wire up navigation to course detail later
  }

  onViewDetails(): void {
    console.log('View Details clicked for:', this.course.title);
    // wire up navigation to course detail later
  }
}
