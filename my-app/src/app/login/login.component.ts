import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private http: HttpClient, private router: Router) {}

  async login(form: NgForm) {
    try {
     const rs = await lastValueFrom(this.http.post('http://localhost:4000/auth/login', form));
     console.log(rs);
     this.router.navigate(['/posts'])
    } catch (error) {
      console.log(error);
    }
  }

  toRegister(){
    this.router.navigate(['/register']);
  }
}
