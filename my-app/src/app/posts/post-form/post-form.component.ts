import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  constructor(private postService: PostsService) {}

  createPost(form: NgForm) {
    this.postService.updatePost(form);
  }
}
