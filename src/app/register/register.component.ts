import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../shared/services/loader.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;

  constructor(private userService: UserService,
    private router: Router,
    public toastr: ToastrService,
    public loaderService: LoaderService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    }, { validators: this.MatchPassword });

  }

  //Custom validator for password and confirm password match
  MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirm_password').value; // to get value in input tag
    if(password && confirmPassword) {
      if (password !== confirmPassword) {
        AC.get('confirm_password').setErrors({ equalTo: true });
      } else {
        AC.get('confirm_password').setErrors(null);
      }
    }
  }

  // Register new user and redirect to login screen after successfull reagistration
  registerUser() : void {
    this.loaderService.startLoading();
    if (this.RegisterForm.invalid) {
      return;
    }
    const reqData:any = Object.assign(this.RegisterForm.value);
    delete reqData.confirm_password;
    this.userService.userRegister(reqData)
    .subscribe(
        data => {
            this.loaderService.stopLoading();
            this.router.navigate(['login']);
        },
        error => {
            this.toastr.error(error.error.message);
            this.loaderService.stopLoading();
        });
  }

  
}
