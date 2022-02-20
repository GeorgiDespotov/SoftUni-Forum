import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost, Itheme } from './shared/interfaces';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    
    return this.http.get<Itheme[]>('http://localhost:3000/api/themes');
  }

  loadPosts() {
    return this.http.get<Ipost[]>('http://localhost:3000/api/posts');
  }
}
