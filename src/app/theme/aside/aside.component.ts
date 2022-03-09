import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { Ipost, Itheme } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  // @Input() title!: string;
  @Input() items: Ipost[] | undefined;

  
  title!: string;

  posts: Ipost[] | undefined;

  constructor(private contentServices: ContentService,) {
    this.fetchPosts();
    this.title = 'Reacent Posts';
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentServices.loadPosts(5).subscribe(posts => this.posts = posts);

  }

}
