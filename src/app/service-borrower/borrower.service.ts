import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrower } from '../model/borrower';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  private  url ="http://localhost:8082/SpringMVC/servlet/updateBorrower/";
  private url1 = "http://localhost:8082/SpringMVC/servlet/getByIdBorrower/";

  constructor(private _http:HttpClient) { }
  public getBorrower():Observable<Borrower[]>{
    const url='http://localhost:8082/SpringMVC/servlet/getAllBorrower';
    return this._http.get<Borrower[]>(url);
  }
  public addBorrower(br: Borrower):Observable<Borrower>{
    const url ='http://localhost:8082/SpringMVC/servlet/ajouterBorrower';
    return this._http.post<Borrower>(url, br);
  }
  public deleteBorrowerById(id : number){
    const url='http://localhost:8082/SpringMVC/servlet/deleteBorrower/';
    return this._http.delete<Borrower>(url+id);
  }
  public updateBorrower(id :number,br:Borrower):Observable<Borrower>{
    
    return this._http.put<Borrower>(`${this.url}/${id}`,br);
  }
  public capacite(idB:number,idBank:number,periode:number):Observable<any>{
    const url ='http://localhost:8082/SpringMVC/servlet/Capacite/';
    return this._http.get<number>(url+idB+'/'+idBank+'/'+periode);
  }
  public getBorrowerById(id:number):Observable<Borrower>{
   
    return this._http.get<Borrower>(`${this.url1}/${id}`);
  }
}
