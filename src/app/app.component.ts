import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { Ipost, Itheme } from './shared/interfaces';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor ( private userService: UserService ) {

    this.userService.getProfileInfo().subscribe({
      error: () => {
        this.userService.user = null;
      }
    })
  }
  // posts: Ipost[] | undefined;

  // constructor(private contentServices: ContentService) {
  //   this.fetchPosts();
  //  }


  // fetchPosts(): void {
  //   this.posts = undefined;
  //   this.contentServices.loadPosts(5).subscribe(posts => this.posts = posts);

  // }
}
