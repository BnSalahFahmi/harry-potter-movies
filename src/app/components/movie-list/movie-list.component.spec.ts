import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../../services/movie.service';
import SpyObj = jasmine.SpyObj;

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieService: SpyObj<MovieService>;

  beforeEach(async () => {
    movieService = jasmine.createSpyObj("MovieService", ['getMovies']);
    await TestBed.configureTestingModule({
      imports: [MovieListComponent],
      providers: [{provide: MovieService, useValue: movieService}]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
