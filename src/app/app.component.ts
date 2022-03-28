import { Component } from '@angular/core';
import { ContentService } from './core/survices/content.service';
import { Ipost, Itheme } from './shared/interfaces';
import { UserService } from './core/survices/user.service';

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
    console.log(userService.user);
    
    // if (userService.getProfileInfo()) {
      console.log(userService.getProfileInfo());
      
    
    userService.getProfileInfo().subscribe({
      error: (err) => {
        this.userService.user = null;
        console.log('here');
        
        throw err;
      }
    })
  // }
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
