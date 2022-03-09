import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost, Itheme } from './shared/interfaces';
import { environment } from '../environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    
    return this.http.get<Itheme>(`${API_URL}/themes/${id}`);
  }
  
  loadThemes() {
    
    return this.http.get<Itheme[]>(`${API_URL}/themes`);
  }

  loadPosts(take?: number) {

    const query = take ? `?limit=${take}` : '';

    return this.http.get<Ipost[]>(`${API_URL}/posts${query}`);
  }
}
