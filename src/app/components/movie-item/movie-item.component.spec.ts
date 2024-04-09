import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieItemComponent } from './movie-item.component';
import { Movie } from '../../models/movie';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  const movie: Movie = {
    id: "e80d5a37-620e-4be2-92b9-fb1f5262494f",
    title: "Harry Potter and the Philosopher's Stone",
    duration: "152",
    budget: "125",
    release_date: "2001-11-04"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
