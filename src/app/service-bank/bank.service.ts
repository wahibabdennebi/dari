import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../model/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private url = "http://localhost:8082/SpringMVC/servlet/updateBank/";

  constructor(private _http:HttpClient) { }
  public getBank():Observable<Bank[]>{
    const url='http://localhost:8082/SpringMVC/servlet/getAllBank';
    return this._http.get<Bank[]>(url);
  }
  public addBank(b: Bank):Observable<Bank>{
    const url ='http://localhost:8082/SpringMVC/servlet/ajouterBank';
    return this._http.post<Bank>(url, b);
  }
  public deleteBankById(id : number){
    const url='http://localhost:8082/SpringMVC/servlet/deleteBank/';
    return this._http.delete<Bank>(url+id);
  }
  public updateBank(id:number,b:Bank):Observable<object>{
    //const url ='http://localhost:8082/SpringMVC/servlet/updateBank/';
    return this._http.put<Bank>(`${this.url}/${id}`,b);
    //`${this.find}/${id}
  }
  public mensualite(id:number,empt:number,period:number){
    const url='http://localhost:8082/SpringMVC/servlet/getMensualite/';
    return this._http.get(url+id+'/'+empt+'/'+period);
  }
  public rappel(b:Bank,id:number):Observable<any>{
    const url='http://localhost:8082/SpringMVC/servlet/Rappel/';
    return this._http.post(url+id,b);
  }
  public getBankById(id:number):Observable<Bank>{
    const url = 'http://localhost:8082/SpringMVC/servlet/getById/';
    return this._http.get<Bank>(url+id);
  }
}
