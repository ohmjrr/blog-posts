import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './service/posts.service';
import { PostsRoutingModule } from './posts-routing.module';
import { NavPostsComponent } from './nav-posts/nav-posts.component';


@NgModule({
  declarations: [PostsComponent, PostFormComponent, PostListComponent, NavPostsComponent,],
  imports: [CommonModule, RouterModule,FormsModule,PostsRoutingModule],
  providers: [PostsService],
})
export class PostsModule {}
