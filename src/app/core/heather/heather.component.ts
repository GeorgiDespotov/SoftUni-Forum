import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-heather',
  templateUrl: './heather.component.html',
  styleUrls: ['./heather.component.css']
})
export class HeatherComponent {

  get isLoged(): boolean {
    return this.userService.isLoged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
 
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  logout(): void {
    this.router.navigate(['/home']);
    this.userService.user = undefined;
  }
}
