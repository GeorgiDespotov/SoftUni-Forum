import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, missMatch } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      
        password: ['', [Validators.required, Validators.minLength(3)]],
        rePassword: ['', [Validators.required]]
    },
    {
      validator: missMatch('password', 'rePassword')
    }
    );
   }

  register(): void {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value);
    
  }

}
