import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveClass } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-live-class-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-class-card.html',
  styleUrl: './live-class-card.scss'
})
export class LiveClassCardComponent {
  @Input() liveClass!: LiveClass;

  onJoin(): void {
    console.log('Join clicked for:', this.liveClass.title);
    // wire up Zoom link later
  }

  onSetAlert(): void {
    console.log('Set Alert clicked for:', this.liveClass.title);
    // wire up notification later
  }
}
