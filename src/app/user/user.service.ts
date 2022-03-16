import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { localeStorage } from '../core/injection-tokens';
import { Iuser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';


const apiUrl = environment.apiURL;

@Injectable()
export class UserService {

  user: Iuser | null | undefined;

  loged = !!this.getProfileInfo();

  get isLoged(): boolean {
    return this.loged;
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
    return this.http.post<Iuser>(`${apiUrl}/register`, data, { withCredentials: true })
      .pipe(
        tap((user) => this.user = user)
      );
  }

  getProfileInfo() {
    return this.http.get<Iuser>(`${apiUrl}/users/profile`, { withCredentials: true })
      .pipe(
        tap((user) => this.user = user)
      );
  }

  login(data: { email: string, password: string }) {
    this.loged = true;
    return this.http.post<Iuser>(`${apiUrl}/login`, data, { withCredentials: true })
      .pipe(
        tap((user) => this.user = user)
      );
  }

  logout() {
    this.loged = false;
    return this.http.post<Iuser>(`${apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.user = null)
      );;
  }

  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<Iuser>(`${apiUrl}/users/profile`, data, { withCredentials: true })
      .pipe(
        tap((user) => this.user = user)
      );
  }
}


