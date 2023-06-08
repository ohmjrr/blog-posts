import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  posts: any[] = [];

  getPosts() {
    return this.posts;
  }

  updatePost(post:any) {
    this.posts.push(post);
  }
}
