import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  // here you can check if user is authenticated or not through his token 
  isAuthenticated() {
    return this.getToken();
  }
}
