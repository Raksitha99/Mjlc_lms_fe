import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveClassCardComponent } from '../../../shared/components/live-class-card/live-class-card';
import {
  DUMMY_UPCOMING_CLASSES,
  DUMMY_PAST_CLASSES,
  UpcomingClass,
  PastClass
} from '../../../shared/data/student-dashboard.data';

type Tab = 'upcoming' | 'past';

@Component({
  selector: 'app-live-classes',
  standalone: true,
  imports: [CommonModule, LiveClassCardComponent],
  templateUrl: './live-classes.html',
  styleUrl: './live-classes.scss'
})
export class LiveClassesComponent {

  activeTab = signal<Tab>('upcoming');

  upcomingClasses: UpcomingClass[] = DUMMY_UPCOMING_CLASSES;
  pastClasses: PastClass[] = DUMMY_PAST_CLASSES;

  // Joinable classes appear first in Happening Soon section
  happeningSoon = computed(() =>
    this.upcomingClasses.filter(c => c.isJoinable)
  );

  // Non-joinable classes appear in the regular upcoming list
  scheduledSoon = computed(() =>
    this.upcomingClasses.filter(c => !c.isJoinable)
  );

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }
}
