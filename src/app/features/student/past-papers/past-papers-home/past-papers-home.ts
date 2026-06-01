import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PastPaperCourseCardComponent } from '../../../../shared/components/past-paper-course-card/past-paper-course-card';
import { AttemptedPaperRowComponent } from '../../../../shared/components/attempted-paper-row/attempted-paper-row';
import {
  DUMMY_PAST_PAPER_COURSES,
  DUMMY_ATTEMPTED_PAPERS,
  PastPaperCourse,
  AttemptedPaper
} from '../../../../shared/data/student-dashboard.data';

@Component({
  selector: 'app-past-papers',
  standalone: true,
  imports: [
    CommonModule,
    PastPaperCourseCardComponent,
    AttemptedPaperRowComponent
  ],
  templateUrl: './past-papers-home.html',
  styleUrl: './past-papers-home.scss'
})
export class PastPapersHomeComponent {

  courses: PastPaperCourse[] = DUMMY_PAST_PAPER_COURSES;
  attemptedPapers: AttemptedPaper[] = DUMMY_ATTEMPTED_PAPERS;

  totalPapers = this.courses.reduce((sum, c) => sum + c.paperCount, 0);
  papersAttempted = this.attemptedPapers.length;

  constructor(private router: Router) {}

  onViewPapers(courseId: number): void {
    // NOW navigates to the list page with the courseId in the URL
    this.router.navigate(['/student/past-papers', courseId]);
  }

  onPaperAction(paper: AttemptedPaper): void {
    console.log('Action clicked for paper:', paper.name, '| Status:', paper.status);
  }
}
