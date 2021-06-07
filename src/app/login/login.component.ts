import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './auth.service';
import {TokenStorageService} from '../token-storage.service';
import {Router} from '@angular/router';
import {LoginInfo} from '../model/login-info';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoginFailed = false ;
  errorMessage = '' ;

constructor(private authService: AuthenticationService, private tokenStorage: TokenStorageService,
            private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { this.router.navigate(['/']);
  /*this.authService.login(new LoginInfo(this.form.userName, this.form.password_client))
    .pipe(first()).subscribe(
      data => {
        this.isLoginFailed = false;
        this.router.navigate(['/']); },
      error => {
        this.errorMessage = error.message;
        this.isLoginFailed = true;
      }
    );*/
  }

  }

