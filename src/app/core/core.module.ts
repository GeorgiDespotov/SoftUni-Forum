import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatherComponent } from './heather/heather.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeatherComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeatherComponent,
    FooterComponent
  ]
})
export class CoreModule { }
