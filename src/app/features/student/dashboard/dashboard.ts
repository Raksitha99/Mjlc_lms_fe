import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../../shared/components/course-card/course-card';
import { LiveClassCardComponent } from '../../../shared/components/live-class-card/live-class-card';
import {
  DUMMY_COURSES,
  DUMMY_LIVE_CLASSES,
  DUMMY_QUIZ_RESULTS,
  Course,
  LiveClass,
  QuizResult
} from '../../../shared/data/student-dashboard.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    LiveClassCardComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  studentName = 'Yuki';
  streakDays = 12;

  courses: Course[] = DUMMY_COURSES;
  liveClasses: LiveClass[] = DUMMY_LIVE_CLASSES;
  quizResults: QuizResult[] = DUMMY_QUIZ_RESULTS;

  onResumeLesson(): void {
    console.log('Resume lesson clicked — wire up routing later');
  }

  onDailyGoals(): void {
    console.log('Daily goals clicked — wire up later');
  }
}
