import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/survices/user.service';

@Component({
  selector: 'app-heather',
  templateUrl: './heather.component.html',
  styleUrls: ['./heather.component.css']
})
export class HeatherComponent {

  get isLoged(): boolean {
    // console.log(this.userService.isLoged);
    // console.log(this.userService.loged);
    
    return this.userService.isLoged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }
 
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
