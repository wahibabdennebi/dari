import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { livres } from './livre/livre.module';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant/etudiant.module';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
    url='http://localhost:3000/Livres'
  constructor(private http:HttpClient) { }
  

getlivers(): Observable<livres> {
  const url="http://localhost:3000/Livres";
  return this.http.get<livres>(url);
}
postlivers(p:livres){
  return this.http.post(this.url,p);

}
}
