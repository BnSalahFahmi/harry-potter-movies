import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('./components/movie-list/movie-list.component').then(
      (module) => module.MovieListComponent
    )
  },
  {
    path: 'movies/:movieId',
    loadComponent: () => import('./components/movie-details/movie-details.component').then(
      (module) => module.MovieDetailsComponent
    )
  },
  {
    path: '**',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];
