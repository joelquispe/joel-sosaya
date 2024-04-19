import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  get(endPoint: string): Promise<AxiosResponse> {
    return axios.get(`http://localhost:3001/${endPoint}`);
  }
}
