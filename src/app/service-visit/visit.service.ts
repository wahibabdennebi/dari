import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../model/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private url ="http://localhost:8082/SpringMVC/servlet/updateVisit/";
  private url1 = "http://localhost:8082/SpringMVC/servlet/getByIdVisit/";

  constructor(private _http:HttpClient) { }

  public getVisit():Observable<Visit[]>{
    const url='http://localhost:8082/SpringMVC/servlet/getAllVisit';
    return this._http.get<Visit[]>(url);
  }
  public addVisit(v:Visit ):Observable<Visit>{
    const url ='http://localhost:8082/SpringMVC/servlet/ajouterVisit';
    return this._http.post<Visit>(url, v);
  }
  public deleteVisitById(id : number){
    const url='http://localhost:8082/SpringMVC/servlet/deleteVisit/';
    return this._http.delete<Visit>(url+id);
  }
  public updateVisit(id:number,v:Visit):Observable<Visit>{
    
    return this._http.put<Visit>(`${this.url}/${id}`,v);
  }
  public getVisitById(id:number):Observable<Visit>{
    
    return this._http.get<Visit>(`${this.url1}/${id}`);
  }
}
