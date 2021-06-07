import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SignupInfo} from '../model/signup-info';
import {JwtResponse} from '../model/jwt-response';
import {TokenStorageService} from '../token-storage.service';
import {LoginInfo} from '../model/login-info';

const httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) };

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private SignupUrl = 'http://localhost:8083/api/authh/register';
  private loginUrl = 'http://localhost:8083/api/authh/login';


  // public username: string;
  // public password: string;

constructor(private http: HttpClient,
            private tokenStorage: TokenStorageService, private router: Router) {
  this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
  this.currentUser = this.currentUserSubject.asObservable();
  }

public get currentUserValue(): any {
  return this.currentUserSubject.value;
}

signUp(signupInfo: SignupInfo){
  return this.http.post<JwtResponse>(this.SignupUrl, signupInfo, httpOptions)
    .pipe(map(data => {
      this.saveUserData(data);
    }));
}

login(loginInfo: LoginInfo) {
    return this.http.post<JwtResponse>(this.loginUrl, loginInfo, httpOptions).pipe(map(data => {
      this.saveUserData(data);
    }));

  }

private saveUserData(data){
  this.tokenStorage.saveToken(data.accessToken);
  this.tokenStorage.saveUserName(data.userName);
  this.tokenStorage.saveAuthorities(data.authorities);
  this.currentUserSubject.next(data.accessToken);

}
}

