import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  endPoint = "genres";
  constructor(private readonly apiService:ApiService) { }

  async findAll() {
    return this.apiService.get(this.endPoint);
  }
}
