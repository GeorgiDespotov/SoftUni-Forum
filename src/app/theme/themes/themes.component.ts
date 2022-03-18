import { Component } from '@angular/core';
import { UserService } from 'src/app/core/survices/user.service';
import { ContentService } from '../../core/survices/content.service';
import { Ipost, Itheme } from '../../shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {

  posts: Ipost[] | undefined;
  themes: Itheme[] | undefined;

  get isLoged(): boolean {
    return this.userService.isLoged;
  }

  constructor(
    private contentServices: ContentService, 
    private userService: UserService
    ) {
    this.fetchThemes();
    this.fetchPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentServices.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentServices.loadPosts(5).subscribe(posts => this.posts = posts);

  }
}

