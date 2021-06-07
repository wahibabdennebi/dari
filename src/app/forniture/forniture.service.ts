import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forniture } from './forniture.module';

@Injectable({
  providedIn: 'root'
})
export class FornitureService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}


  public getFornitures(): Observable<Forniture[]>{
    const url = 'http://localhost:8083/furniture/alltrue';
    return this.http.get<Forniture[]>(url);
  }
public addFornitures(f: Forniture ): Observable<Forniture>{
  const url = 'http://localhost:8083/furniture/costmers/3/add';
  return this.http.post<Forniture>(url, f);
}
public addImage(selectedFile: File, id: number): Observable<File>{
 // const url ='http://localhost:8083/image/upload/'
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', selectedFile, selectedFile.name);
  console.log(selectedFile.name);
  return this.http.post<File>(`http://localhost:8083/image/upload/${id}`, uploadImageData);
}
public getImages(id: number): Observable<any>
{
return this.http.get<any>(`http://localhost:8083/furniture/FurnitureImages/${id}`);
}
}
