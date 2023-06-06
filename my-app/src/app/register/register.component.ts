import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  createAccount(form: NgForm) {
    console.log(form.value);
    this.http
      .post('http://localhost:4000/auth/register', form.value)
      .subscribe(
        (response) => {
          console.log(response);
          form.reset();
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
