import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { CustomValidatorDirective } from './custom-validar.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeDeffPipe } from './pipes/time-deff.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDeffPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDeffPipe
  ]
})
export class SharedModule { }
