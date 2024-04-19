import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import axios, { AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  get(endPoint: string): Promise<AxiosResponse> {
    return axios.get(`${environment.baseUrl}/${endPoint}`);
  }
}
