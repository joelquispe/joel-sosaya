import { Component, Input } from '@angular/core';
import { MoviesInterface } from '@app/core/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: MoviesInterface;
}
