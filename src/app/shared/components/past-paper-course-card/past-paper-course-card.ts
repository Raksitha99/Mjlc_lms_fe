import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastPaperCourse } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-past-paper-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-paper-course-card.html',
  styleUrl: './past-paper-course-card.scss'
})
export class PastPaperCourseCardComponent {
  @Input() course!: PastPaperCourse;
  @Output() viewPapers = new EventEmitter<number>();

  // Converts rating number to a star string e.g. 4.9 → '★★★★★'
  get starDisplay(): string {
    const full = Math.floor(this.course.rating);
    return '★'.repeat(full) + (this.course.rating % 1 >= 0.5 ? '★' : '');
  }

  onViewPapers(): void {
    this.viewPapers.emit(this.course.id);
  }
}
