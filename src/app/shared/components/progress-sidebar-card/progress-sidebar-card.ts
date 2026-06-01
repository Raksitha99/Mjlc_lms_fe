import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProgressStats {
  completedCount: number;
  inProgressCount: number;
  notAttemptedCount: number;
  bestScore: number;
  bestScorePaper: string;
  averageScore: number;
}

@Component({
  selector: 'app-progress-sidebar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-sidebar-card.html',
  styleUrl: './progress-sidebar-card.scss'
})
export class ProgressSidebarCardComponent {
  @Input() stats!: ProgressStats;

  // Percentage of papers completed out of total
  get completedPercent(): number {
    const total =
      this.stats.completedCount +
      this.stats.inProgressCount +
      this.stats.notAttemptedCount;
    if (total === 0) return 0;
    return Math.round((this.stats.completedCount / total) * 100);
  }

  // SVG circle circumference for progress ring animation
  readonly radius = 42;
  readonly circumference = 2 * Math.PI * this.radius;

  get strokeDashoffset(): number {
    const progress = this.completedPercent / 100;
    return this.circumference * (1 - progress);
  }
}
