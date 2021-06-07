import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const baseUrl = 'http://localhost:8083/api/CR/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  createUsers(user: object): Observable<object> {
    return this.http.post(`http://localhost:8083/api/CR/users/`, user);
  }


  updateUsers(value: any): Observable<object> {
    return this.http.put(`http://localhost:8083/api/CR/users`, value);
  }

  deleteUsers(id_user: number): Observable<any> {
    return this.http.delete(`http://localhost:8083/api/CR/users/${id_user}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`http://localhost:8083/api/CR/users`);
  }

  getUsers(id_user: number): Observable<any> {
    return this.http.get(`http://localhost:8083/api/CR/users/${id_user}`);
  }


}
