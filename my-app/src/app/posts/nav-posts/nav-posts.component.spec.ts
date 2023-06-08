import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPostsComponent } from './nav-posts.component';

describe('NavPostsComponent', () => {
  let component: NavPostsComponent;
  let fixture: ComponentFixture<NavPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPostsComponent]
    });
    fixture = TestBed.createComponent(NavPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
