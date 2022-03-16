import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeatherComponent } from './heather/heather.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { localeStorage } from './injection-tokens';
import { AuthActivate } from './guards/auth.activate';



@NgModule({
  declarations: [
    HeatherComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeatherComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: localeStorage,
      useFactory: (platformid: Object) => {
        if (isPlatformBrowser(platformid)) {
          return window.localStorage;
        }
        if (isPlatformServer(platformid)) {

          return class implements Storage {
            length!: 0;
            private data: Record<string, string> = {};
            clear(): void {
              this.data = {};
            }
            getItem(key: string): string | null {
              return this.data[key];
            }
            key(index: number): string | null {
              throw new Error('Method not implemented.');
            }
            removeItem(key: string): void {
              const { [key]: removeItem, ...others } = this.data;
              this.data = others;
            }
            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
  
          }
        }
        return {};
      },
      deps: [PLATFORM_ID]
      // useValue: window.localStorage
    },
    AuthActivate 
  ]
})
export class CoreModule {
  // constructor(@Inject(PLATFORM_ID) platformid: any) {
  //   console.log(isPlatformBrowser(platformid));

  // }
}
