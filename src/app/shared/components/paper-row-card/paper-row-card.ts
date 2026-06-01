import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperItem } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-paper-row-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paper-row-card.html',
  styleUrl: './paper-row-card.scss'
})
export class PaperRowCardComponent {
  @Input() paper!: PaperItem;
  @Output() startPaper    = new EventEmitter<PaperItem>();
  @Output() continuePaper = new EventEmitter<PaperItem>();
  @Output() reviewPaper   = new EventEmitter<PaperItem>();
  @Output() retryPaper    = new EventEmitter<PaperItem>();

  onStart():    void { this.startPaper.emit(this.paper); }
  onContinue(): void { this.continuePaper.emit(this.paper); }
  onReview():   void { this.reviewPaper.emit(this.paper); }
  onRetry():    void { this.retryPaper.emit(this.paper); }
}
