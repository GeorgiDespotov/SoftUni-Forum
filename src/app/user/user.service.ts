import { Inject, Injectable } from '@angular/core';
import { localeStorage } from '../core/injection-tokens';
import { Iuser } from '../shared/interfaces';

@Injectable()
export class UserService {

  user: Iuser | undefined;

  get isLoged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(localeStorage) private localeStorage: Window['localStorage']) {
    try {
      const localeStorageUser = this.localeStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localeStorageUser)
    } catch {
      this.user = undefined;
    }
   }

  login(email: string, password: string): void {
    this.user = {
      email,
      firstName: 'John',
      lastName: 'Dou'
    }
    this.localeStorage.setItem('<USER>', JSON.stringify(this.user))
  }

  logout(): void {
    this.user = undefined;
  }
}
