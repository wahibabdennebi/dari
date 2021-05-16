import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { order } from '../order-module/order-module.module';
import { Promotion } from '../promotion/promotion.module';
import { Forniture } from './forniture.module';

@Injectable({
  providedIn: 'root'
})
export class FornitureService {
  private apiServerUrl=environment.apiBaseUrl
output :order;
  constructor(private http:HttpClient) {}
 

  public getFornitures():Observable<Forniture[]>{
    const url='http://localhost:8083/furniture/alltrue';
    return this.http.get<Forniture[]>(url);
  }
public addFornitures(f:Forniture ):Observable<Forniture>{
  const url ='http://localhost:8083/furniture/costmers/1/add'
  return this.http.post<Forniture>(url,f);
}
public addImage(selectedFile:File, id:number):Observable<File>{
 // const url ='http://localhost:8083/image/upload/'
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', selectedFile, selectedFile.name)
  return this.http.post<File>(`http://localhost:8083/image/upload/${id}`,uploadImageData);
}
public getImages(id:number):Observable<any>
{
return this.http.get<any>(`http://localhost:8083/furniture/FurnitureImages/${id}`)
}
public getchercher(f:Forniture): Observable<Forniture[]>{
  const url='http://localhost:8083/furniture/saerch/'
  return this.http.get<Forniture[]>(`${url}${f.titre}/${f.price}`)
}
public getAllFornituresByCostumerId(id:number):Observable<Forniture[]>{
  const url ='http://localhost:8083/furniture/Furniturecos/'
return this.http.get<Forniture[]>(`${url}${id}`);
}
public deleteForniture(id:number):Observable<any>{
  const url ='http://localhost:8083/furniture/delete/'
  return this.http.delete<any>(`${url}${id}`);
}

public updateFornitures(f:Forniture ):Observable<Forniture>{
  const url ='http://localhost:8083/furniture/update/1'
  return this.http.put<Forniture>(url, f);
}

public getorder ():Observable<order[]>{
const url ='http://localhost:8083/furniture/order'
return this.http.get<order[]>(url);
}
public addCarteToStripe(n:any):Observable<any>{
  const url ='http://localhost:8083/stripe/addcarte';
  return this.http.post<any>(url,n);
}
public addOrderToStripe(id:number):Observable<any>{
  const url = 'http://localhost:8083/stripe/paymentintent/'
  return this.http.get<any>(`${url}${id}`)
}
public confirmerToStripe(order:order):Observable<any>{
  const url = 'http://localhost:8083/stripe/confirm/1'
  return this.http.post<any>(url,order);
}

public deleteOrder(order:order):Observable<any>{
  const url = 'http://localhost:8083/stripe/cancel'
  return this.http.post<any>(url,order);
}
public buyWithLoyaltyPoint(costmers_id:number,furniture_id:number,method:string){
  const url='http://localhost:8083/furniture/costmers/'
  return this.http.get(`${url}${costmers_id}/${furniture_id}/${method}`,{responseType: 'text'} );
}

public addPromotion(promtion:Promotion):Observable<Promotion>{
  const url='http://localhost:8083/promotion/addpromotion/3'
  return this.http.post<Promotion>(url,promtion);
}
public exuterPromotion(id :number):Observable<Forniture[]>{
  const url='http://localhost:8083/promotion/exuterpro/'
 return this.http.get<Forniture[]>(`${url}${id}`)
}
public getListPromtions():Observable<Promotion[]>{
  const url='http://localhost:8083/promotion/getPromotions'
  return this.http.get<Promotion[]>(url);
}

public passData(input:order){
  this.output=input
}
public returnData(){
  return this.output
}
listFurnitures:Forniture[];
public passPomotionFurniture(listFurniture:Forniture[]){
this.listFurnitures=listFurniture
}

public returnPomotionFurniture(){
  return this.listFurnitures
}
}
