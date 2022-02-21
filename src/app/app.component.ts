import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { Ipost, Itheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // posts: Ipost[] | undefined;

  // constructor(private contentServices: ContentService) {
  //   this.fetchPosts();
  //  }


  // fetchPosts(): void {
  //   this.posts = undefined;
  //   this.contentServices.loadPosts(5).subscribe(posts => this.posts = posts);

  // }
}
