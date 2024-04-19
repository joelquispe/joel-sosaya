import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  endPoint = "movies";
  constructor(private readonly apiService:ApiService) { }

  async findAll() {
    return this.apiService.get(this.endPoint);
  }
}
