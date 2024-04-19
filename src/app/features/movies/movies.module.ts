import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {heroXCircle} from '@ng-icons/heroicons/outline';
const routes: Routes  = [
  {
    path: '',
    component: MoviesComponent
  }
];

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    NgIconsModule.withIcons({ heroXCircle }),
  ],
  exports: [RouterModule]
})
export class MoviesModule { }
