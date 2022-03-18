import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators';
import { UserService } from '../../core/survices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isUpdateMode = false;

  emailValidator = emailValidator

  user1 = this.userService.user

  get user() {
    console.log(this.user1);
    
    return this.userService.user;
  }

  // firstName = this.userService.user?.firstName;
  // email = this.userService.user?.email;

  constructor(private userService: UserService) { 
    

  }

  updateForm(form: NgForm): void {
    if (form.invalid) { return }
    this.userService.updateProfile(form.value).subscribe({
      next: () => {
        this.isUpdateMode = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
