import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost, Itheme } from './shared/interfaces';
import { environment } from '../environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<Itheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }
  
  loadThemes() {
    return this.http.get<Itheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }

  loadPosts(take?: number) {
    const query = take ? `?limit=${take}` : '';
    return this.http.get<Ipost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  postTheme(data: any) {
    return this.http.post<Itheme[]>(`${API_URL}/themes`,data, { withCredentials: true });
  }
}
