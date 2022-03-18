import { Component } from '@angular/core';
import { UserService } from '../../core/survices/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get isLoged(): boolean {
    return this.userService.isLoged;
  }

  constructor(private userService: UserService) { }

 

}
