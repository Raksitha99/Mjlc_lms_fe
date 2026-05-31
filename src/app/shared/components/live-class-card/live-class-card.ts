import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingClass, PastClass } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-live-class-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-class-card.html',
  styleUrl: './live-class-card.scss'
})
export class LiveClassCardComponent {

  @Input() mode: 'upcoming' | 'past' = 'upcoming';
  @Input() upcomingClass?: UpcomingClass;
  @Input() pastClass?: PastClass;

  onJoinZoom(): void {
    console.log('Join Zoom clicked:', this.upcomingClass?.title);
    // wire up Zoom SDK here later
  }

  onSetAlert(): void {
    console.log('Set Alert clicked:', this.upcomingClass?.title);
    // wire up notification service here later
  }

  onWatchRecording(): void {
    console.log('Watch Recording clicked:', this.pastClass?.title);
    // wire up recording URL here later
  }
}
