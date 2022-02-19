import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatherComponent } from './heather/heather.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    HeatherComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeatherComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
