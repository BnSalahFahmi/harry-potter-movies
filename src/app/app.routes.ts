import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('./components/movie-list/movie-list.component').then(
      (module) => module.MovieListComponent
    )
  },
  {
    path: '**',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];
