import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DurationPipe } from '../../pipes/duration.pipe';
import { CurrencyPipe } from '../../pipes/currency.pipe';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CurrencyPipe, DurationPipe],
  templateUrl: './movie-item.component.html'
})
export class MovieItemComponent {
  @Input() movie: Movie;
}
