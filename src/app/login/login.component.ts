import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private userService: UserService,
    private router: Router,
    public toastr: ToastrService,
    public loaderService: LoaderService) { }

  ngOnInit() {
  }

  get f() { return this.LoginForm.controls; }

  //Submit user login form and getting token
  loginUser() {
    this.loaderService.startLoading();
    if (this.LoginForm.invalid) {
      return;
    }
    this.userService.userLogin(
      {
        "email": this.f.email.value, 
        "password": this.f.password.value
     })
    .subscribe(
        (res:any) => {
          this.router.navigate(['profile']);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('currentUser', JSON.stringify(res.data.user_data));
          this.loaderService.stopLoading();
        },
        error => {
          this.toastr.error(error.error.message);
          this.loaderService.stopLoading();
        });
  }
}
