import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/survices/content.service';
import { Itheme } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  theme: Itheme | undefined;

  constructor(
    private contentServices: ContentService,
    private activatedRoute: ActivatedRoute
    ) {
    this.fetchTheme();
    
  }
  
  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params.themeId;
    this.contentServices.loadTheme(id).subscribe(theme => this.theme = theme);
  }
}
