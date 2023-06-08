import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-posts',
  templateUrl: './nav-posts.component.html',
  styleUrls: ['./nav-posts.component.css']
})
export class NavPostsComponent {
  openToggle:boolean = false;

  
  constructor( private router: Router) {}

  openDropdown() {
    this.openToggle = !this.openToggle;
  }

  signOut(){
    this.router.navigate(['/login']);
  }
}
