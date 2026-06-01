import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttemptedPaper } from '../../data/student-dashboard.data';

@Component({
  selector: 'app-attempted-paper-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attempted-paper-row.html',
  styleUrl: './attempted-paper-row.scss'
})
export class AttemptedPaperRowComponent {
  @Input() paper!: AttemptedPaper;
  @Output() action = new EventEmitter<AttemptedPaper>();

  get actionLabel(): string {
    return this.paper.status === 'Completed' ? 'Review' : 'Continue';
  }

  onAction(): void {
    this.action.emit(this.paper);
  }
}
