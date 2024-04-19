import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenresInterface } from '@app/core/interfaces';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss'],
})
export class GenreCardComponent {
  @Input() genre!: GenresInterface;
  @Input() isSelected!: boolean;
  @Output() removeGenre = new EventEmitter<string>();
  @Output() selectGenre = new EventEmitter<string>();

  onHandleGenre(name: string) {
    if (this.isSelected) {
      this.removeGenre.emit(name);
    } else {
      this.selectGenre.emit(name);
    }
  }
}
