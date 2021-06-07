import { Component, OnInit } from '@angular/core';
import {SignupInfo} from '../model/signup-info';
import {AuthenticationService} from '../login/auth.service';
import {Route, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignupInfo;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }
  onSubmit(): void { this.signupInfo = new SignupInfo(this.form.userName, this.form.email,
                     this.form.phone_number, this.form.password_client );
                     this.authService.signUp(this.signupInfo).pipe(first()).subscribe(
    data => {
      this.isSignUpFailed = false;
      this.router.navigate(['login']); },
    error => {
      this.errorMessage = error.message;
      this.isSignUpFailed = true;
    }
  );
  }

}
