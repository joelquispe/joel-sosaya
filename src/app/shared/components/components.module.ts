import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroXCircle } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [MovieCardComponent, GenreCardComponent],
  exports: [MovieCardComponent,GenreCardComponent],
  imports: [CommonModule, NgIconsModule.withIcons({ heroXCircle })],
})
export class ComponentsModule {}
