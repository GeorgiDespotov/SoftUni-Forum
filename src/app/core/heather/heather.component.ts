import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-heather',
  templateUrl: './heather.component.html',
  styleUrls: ['./heather.component.css']
})
export class HeatherComponent implements OnInit {

  get isLoged(): boolean {
    return this.userService.isLoged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
