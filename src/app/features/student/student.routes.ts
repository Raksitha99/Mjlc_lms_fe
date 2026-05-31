import { Routes } from '@angular/router';
import { StudentLayoutComponent } from '../../layouts/student-layout/student-layout';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: StudentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'my-courses',
        loadComponent: () =>
          import('./my-courses/my-courses')
            .then(m => m.MyCoursesComponent)
      },
      {
        path: 'live-classes',
        loadComponent: () =>
          import('./live-classes/live-classes')
            .then(m => m.LiveClassesComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
