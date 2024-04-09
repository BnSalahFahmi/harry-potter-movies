import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie.service";
import { AsyncPipe } from "@angular/common";
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [AsyncPipe, MovieItemComponent, RouterOutlet],
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private readonly movieService: MovieService) {
  }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

}
