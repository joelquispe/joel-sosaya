import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {heroXCircle} from '@ng-icons/heroicons/outline';
import { ComponentsModule } from '@app/shared/components/components.module';
import { LayoutsModule } from '@app/shared/layouts/layouts.module';
const routes: Routes  = [
  {
    path: '',
    component: MoviesComponent
  }
];

@NgModule({
  declarations: [
    MoviesComponent,
    
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
   
    LayoutsModule,
    FormsModule,
    CommonModule,
    NgIconsModule.withIcons({ heroXCircle }),
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviesModule { }
