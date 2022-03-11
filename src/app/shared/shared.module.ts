import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { CustomValidatorDirective } from './custom-validar.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective
  ]
})
export class SharedModule { }
