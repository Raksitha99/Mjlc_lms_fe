import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFullCardComponent } from '../../../shared/components/course-full-card/course-full-card';
import {
  DUMMY_COURSES,
  Course
} from '../../../shared/data/student-dashboard.data';

type Tab = 'inProgress' | 'completed' | 'all';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, CourseFullCardComponent],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.scss'
})
export class MyCoursesComponent {

  activeTab = signal<Tab>('inProgress');
  searchQuery = signal('');

  allCourses: Course[] = DUMMY_COURSES;

  // Stats computed from the data — update automatically when data changes
  totalEnrolled = computed(() => this.allCourses.length);
  inProgressCount = computed(() =>
    this.allCourses.filter(c => c.progress > 0 && c.progress < 100).length
  );
  completedCount = computed(() =>
    this.allCourses.filter(c => c.progress === 100).length
  );
  avgProgress = computed(() => {
    const total = this.allCourses.reduce((sum, c) => sum + c.progress, 0);
    return Math.round(total / this.allCourses.length);
  });

  // Courses shown based on active tab
  visibleCourses = computed(() => {
    const tab = this.activeTab();
    const query = this.searchQuery().toLowerCase();

    let filtered: Course[];

    if (tab === 'inProgress') {
      filtered = this.allCourses.filter(
        c => c.progress > 0 && c.progress < 100
      );
    } else if (tab === 'completed') {
      filtered = this.allCourses.filter(c => c.progress === 100);
    } else {
      filtered = [...this.allCourses];
    }

    if (query) {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query)
      );
    }

    return filtered;
  });

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
