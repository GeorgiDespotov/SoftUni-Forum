import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  emailValidator = emailValidator;

  constructor(
    private userService: UserService,
    private activateRaute: ActivatedRoute,
    private router: Router
    ) { }

 login(form: NgForm): void {
   const {email, password} = form.value;
   this.userService.login(email, password);
   const redirectUrl = this.activateRaute.snapshot.queryParams.redirectUrl || '/';
   this.router.navigate([redirectUrl]);
 }

}
