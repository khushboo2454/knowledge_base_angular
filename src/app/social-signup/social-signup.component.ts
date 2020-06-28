import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../shared/services/loader.service';
@Component({
  selector: 'app-social-signup',
  templateUrl: './social-signup.component.html',
  styleUrls: ['./social-signup.component.css']
})
export class SocialSignupComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private userService: UserService,
    private router: Router,
    public toastr: ToastrService,
    public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  async signInWithGoogle() {
    const data:any = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    let req = {
      email: data.email,
      name: data.name,
      googleId: data.id
    }
    this.userService.googleLogin(req)
    .subscribe(
        (res:any) => {
            this.loaderService.stopLoading();
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('currentUser', JSON.stringify(res.data.user_data));
            this.router.navigate(['profile']);
        },
        error => {
            this.toastr.error(error.error.message);
            this.loaderService.stopLoading();
        });
  }
}
