import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieDetails } from '../models/movie-details';

const baseUrl = '/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl);
  }

  getMovie(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${baseUrl}/${id}`);
  }
}
