import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatherComponent } from './heather/heather.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeatherComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeatherComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
