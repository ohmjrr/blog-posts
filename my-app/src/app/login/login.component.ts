import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private http: HttpClient, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);
    this.http
      .post('http://localhost:4000/auth/login', form.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/posts']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  toRegister(){
    this.router.navigate(['/register']);
  }
}
