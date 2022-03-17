import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost, Itheme } from './shared/interfaces';


@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<Itheme>(`/api/themes/${id}`);
  }
  
  loadThemes() {
    return this.http.get<Itheme[]>(`/api/themes`);
  }

  loadPosts(take?: number) {
    const query = take ? `?limit=${take}` : '';
    return this.http.get<Ipost[]>(`/api/posts${query}`);
  }

  postTheme(data: any) {
    return this.http.post<Itheme[]>(`/api/themes`,data);
  }
}
