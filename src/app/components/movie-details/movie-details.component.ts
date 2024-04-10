import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { CurrencyPipe } from '../../pipes/currency.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MovieDetails } from '../../models/movie-details';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, DurationPipe, RouterLink, NgOptimizedImage],
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieId: string;
  movie$: Observable<MovieDetails>;

  constructor(private readonly movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movie$ = this.movieService.getMovie(this.movieId);
  }

}
