import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PaperRowCardComponent } from '../../../../shared/components/paper-row-card/paper-row-card';
import {
  ProgressSidebarCardComponent,
  ProgressStats
} from '../../../../shared/components/progress-sidebar-card/progress-sidebar-card';
import {
  DUMMY_PAPERS_BY_COURSE,
  DUMMY_PAST_PAPER_COURSES,
  PaperItem,
  PastPaperCourse
} from '../../../../shared/data/student-dashboard.data';

type FilterTab = 'all' | 'notAttempted' | 'completed' | 'inProgress';

@Component({
  selector: 'app-past-papers-list',
  standalone: true,
  imports: [
    CommonModule,
    PaperRowCardComponent,
    ProgressSidebarCardComponent
  ],
  templateUrl: './past-papers-list.html',
  styleUrl: './past-papers-list.scss'
})
export class PastPapersListComponent implements OnInit {

  activeTab = signal<FilterTab>('all');
  allPapers: PaperItem[] = [];
  course?: PastPaperCourse;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read courseId from the URL parameter
    const courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.allPapers = DUMMY_PAPERS_BY_COURSE[courseId] ?? [];
    this.course = DUMMY_PAST_PAPER_COURSES.find(c => c.id === courseId);
  }

  // Filtered list based on active tab — recomputes when tab changes
  visiblePapers = computed(() => {
    const tab = this.activeTab();
    if (tab === 'all')          return this.allPapers;
    if (tab === 'completed')    return this.allPapers.filter(p => p.status === 'Completed');
    if (tab === 'inProgress')   return this.allPapers.filter(p => p.status === 'In Progress');
    if (tab === 'notAttempted') return this.allPapers.filter(p => p.status === 'Not Attempted');
    return this.allPapers;
  });

  // Tab counts for badges
  get completedCount():    number { return this.allPapers.filter(p => p.status === 'Completed').length; }
  get inProgressCount():   number { return this.allPapers.filter(p => p.status === 'In Progress').length; }
  get notAttemptedCount(): number { return this.allPapers.filter(p => p.status === 'Not Attempted').length; }

  // Progress sidebar stats
  get progressStats(): ProgressStats {
    const completed  = this.allPapers.filter(p => p.status === 'Completed');
    const scores     = completed.map(p => p.score ?? 0);
    const bestScore  = scores.length > 0 ? Math.max(...scores) : 0;
    const avgScore   = scores.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;
    const bestPaper  = completed.find(p => p.score === bestScore);

    return {
      completedCount:    this.completedCount,
      inProgressCount:   this.inProgressCount,
      notAttemptedCount: this.notAttemptedCount,
      bestScore,
      bestScorePaper:    bestPaper?.title ?? '—',
      averageScore:      avgScore
    };
  }

  setTab(tab: FilterTab): void {
    this.activeTab.set(tab);
  }

  goBack(): void {
    this.router.navigate(['/student/past-papers']);
  }

  onStart(paper: PaperItem):    void { console.log('Start:', paper.title); }
  onContinue(paper: PaperItem): void { console.log('Continue:', paper.title); }
  onReview(paper: PaperItem):   void { console.log('Review:', paper.title); }
  onRetry(paper: PaperItem):    void { console.log('Retry / Re Attempt:', paper.title); }
}
