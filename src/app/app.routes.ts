import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./features/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
];
