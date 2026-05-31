import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-tabs.html',
  styleUrl: './auth-tabs.scss'
})
export class AuthTabsComponent {
  @Input() activeTab: 'login' | 'register' = 'login';
  @Output() tabChange = new EventEmitter<'login' | 'register'>();

  selectTab(tab: 'login' | 'register'): void {
    this.tabChange.emit(tab);
  }
}
