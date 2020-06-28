import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, Login } from './../models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.url;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public userLogin(data: Login) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }

  public userRegister(data: { email: string, password: string, name: string}) {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, data);
  }

  public googleLogin(data: { email: string, googleId: string, name: string}) {
    return this.http.post<any>(`${this.apiUrl}/auth/googles`, data);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);

  }
}
