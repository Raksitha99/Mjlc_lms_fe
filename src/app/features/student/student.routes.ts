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
        path: 'past-papers',
        loadComponent: () =>
          import('./past-papers/past-papers-home/past-papers-home')
            .then(m => m.PastPapersHomeComponent)
      },
      {
        path: 'past-papers/:courseId',
        loadComponent: () =>
            import('./past-papers/past-papers-list/past-papers-list')
                .then(m => m.PastPapersListComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
