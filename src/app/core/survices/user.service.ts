import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { localeStorage } from '../core/injection-tokens';
import { Iuser } from '../../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class UserService {

  user: Iuser | null | undefined = undefined;
  loged = !!this.getProfileInfo();

  get userParams() {
    return this.user
  }
  
  get isLoged(): boolean {
    // console.log(this.user);
    // console.log(this.loged);
    
    return !!this.user;
  }

  constructor(
    private http: HttpClient
    // @Inject(localeStorage) private localeStorage: Window['localStorage']
  ) {
    // try {
    //   const localeStorageUser = this.localeStorage.getItem('<USER>') || 'ERROR';
    //   this.user = JSON.parse(localeStorageUser)
    // } catch {
    //   this.user = undefined;
    // }

  }
  register(data: { username: string; email: string; tel: string; password: string }) {
    this.loged = true;
    return this.http.post<Iuser>(`/api/register`, data)
      .pipe(
        tap((user) => this.user = user)
      );
  }

  getProfileInfo() {
    return this.http.get<Iuser>(`/api/users/profile`)
      .pipe(
        tap((user) => {
          
          this.user = user;
          //СИМУЛИРАМ ГРЕШКА ПРИ ЛОГИН ЗА ДА ПРОБВАМ ГЛОБАЛНИЯТ ЕРОР ХАНДЛЕР
          // this.loged = false;
          // throw new Error('TEST');
        }),
        
      );
  }

  login(data: { email: string, password: string }) {
    console.log(this.user);
    
    return this.http.post<Iuser>(`/api/login`, data)
      .pipe(
        tap((user) => this.user = user)
      );
  }

  logout() {
    this.loged = false;
    return this.http.post<Iuser>(`/api/logout`, {})
    .pipe(
      tap(() => {this.user = null
    console.log(this.isLoged)}
    ),
      );;
      
  }

  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<Iuser>(`/api/users/profile`, data)
      .pipe(
        tap((user) => this.user = user)
      );
  }
}


