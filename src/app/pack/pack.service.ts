import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from './pack';


const requestOptions = Object.assign(
  {}, 
  { responseType: 'json' }, 
 
);

@Injectable({
  providedIn: 'root'
})

export class PackService {
  

  constructor(private http:HttpClient) { }

  public ajouterpack(pack:Pack){
    return this.http.post("http://localhost:8083/pack/ajouterPack",pack)
  }
  public deletepack(id:number){
    return this.http.delete(" http://localhost:8083/pack/delete/"+id)
  }
  public getpack(id: string | number){
    return this.http.get<Pack>( "http://localhost:8083/pack/one/"+id)
  }
  public getpacks(){
    return this.http.get<Pack>( "http://localhost:8083/pack/all")
  }
  exportPdf():Observable<Blob>{
    return this.http.get("http://localhost:8083/pack/download-pdf",{responseType:'blob'});
      }

      public rappel(pack:Pack){
        return this.http.post("http://localhost:8083/pack/Rappel",pack)
      }
  public sendsms(pack:Pack){
    return this.http.get("http://localhost:8083/pack/sendSms",pack);
  }
  public getUserByEmail(email){
    return this.http.get("http://localhost:8083/pack/findUser/"+email);
  }


}
