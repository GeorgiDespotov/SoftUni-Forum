import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { Ipost, Itheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themes: Itheme[] | undefined;

  constructor(private contentServices: ContentService) {
    this.fetchThemes();
   }


  fetchThemes(): void {
    this.themes = undefined;
    this.contentServices.loadThemes().subscribe(themes => this.themes = themes);

  }
}
