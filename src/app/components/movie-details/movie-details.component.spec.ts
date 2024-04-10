import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieService } from '../../services/movie.service';
import SpyObj = jasmine.SpyObj;

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let movieService: SpyObj<MovieService>;

  beforeEach(async () => {
    movieService = jasmine.createSpyObj("MovieService", ['getMovie']);
    await TestBed.configureTestingModule({
      imports: [MovieDetailsComponent],
      providers: [{provide: MovieService, useValue: movieService}]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
