import { Component, Input } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts: any[];

  constructor(private postService: PostsService) {
    this.posts = this.postService.getPosts();
  }
}
