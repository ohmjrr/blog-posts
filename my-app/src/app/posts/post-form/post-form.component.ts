import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../share/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  @Output() formSubmit:EventEmitter<Post> = new EventEmitter();
  model: Post = new Post();

  createPost() {
    this.formSubmit.emit(this.model)
    this.model = new Post();
  }
}
