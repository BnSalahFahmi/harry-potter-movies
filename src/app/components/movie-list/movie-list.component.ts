import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieItemComponent, AsyncPipe, ReactiveFormsModule, RouterOutlet],
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;
  titleFilterControl = new FormControl(null);
  releaseYearFilterControl = new FormControl(null);

  constructor(private readonly movieService: MovieService) {
  }

  ngOnInit() {
    this.movies$ = combineLatest([
      this.movieService.getMovies(),
      this.titleFilterControl.valueChanges.pipe(startWith(null)),
      this.releaseYearFilterControl.valueChanges.pipe(startWith(null)),
    ]).pipe(
      map(([movies, titleFilter, releaseYearFilter]) =>
        this.applyFilters(movies, titleFilter, releaseYearFilter)
      )
    );
  }

  private applyFilters(movies: Movie[], titleFilter: string | null, releaseYearFilter: number | null): Movie[] {
    let filteredMovies = movies;

    if (titleFilter) {
      filteredMovies = this.filterByTitle(filteredMovies, titleFilter);
    }

    if (releaseYearFilter && releaseYearFilter.toString().length >= 4) {
      filteredMovies = this.filterByReleaseYear(filteredMovies, releaseYearFilter);
    }

    return filteredMovies;
  }

  private filterByTitle(movies: Movie[], titleFilter: string): Movie[] {
    return movies.filter(movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()));
  }

  private filterByReleaseYear(movies: Movie[], releaseYearFilter: number | null): Movie[] {
    return movies.filter(movie => new Date(movie.release_date).getFullYear() === releaseYearFilter);
  }
}
