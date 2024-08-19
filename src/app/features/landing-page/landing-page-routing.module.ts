import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./landing-page.component').then(
        (c) => c.LandingPageComponent
      );
    },
    children: [
      {
        path: '',
        loadComponent() {
          return import('./components/home/home.component').then(
            (c) => c.HomeComponent
          );
        },
      },
      {
        path: 'projects',
        loadComponent() {
          return import('./components/projects/projects.component').then(
            (c) => c.ProjectsComponent
          );
        },
      },
      {
        path: 'about',
        loadComponent() {
          return import('./components/about/about.component').then(
            (c) => c.AboutComponent
          );
        },
      },
      {
        path: 'articles',
        loadComponent() {
          return import('./components/articles/articles.component').then(
            (c) => c.ArticlesComponent
          );
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
