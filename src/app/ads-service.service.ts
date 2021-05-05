import { FavorisModule } from './favoris/favoris.module';
import { adsModel } from './ads/adsModel';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup ,FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {
  private getad="http://localhost:8083/Ads/GetAds";
  private a ="http://localhost:8083/Ads/PostAd/1";
  private baseUrl="http://localhost:8083/Ads/articles";
  private i ="http://localhost:8083/Ads/image"
    private u= "http://localhost:8083/Ads/Update"
    private find = "http://localhost:8083/Ads/finde"
    private d ="http://localhost:8083/Ads/delete"
    private searche="http://localhost:8083/Ads/search/";
    private f ="http://localhost:8083/Favorite/AjouterFavorite/1";
    private all="http://localhost:8083/Favorite/all/favorite";
    private e ="http://localhost:8083/Estimate/";
  constructor(private httpclient : HttpClient) {}
  public dataForm :FormGroup;

    getAdslist() : Observable<adsModel[]>{
      return this.httpclient.get<adsModel[]>(this.getad);
      
   }

  //   createData(formData: FormData): Observable<any> {
  //    return this.httpclient.post(`${this.baseUrl}`,formData);
  //  }
   create ( ad:adsModel) : Observable <Object>{
    return this.httpclient.post(this.a,ad);
  }
  

  //  uploadFile(file: File): Observable<HttpEvent<{}>> {
	// 	const formdata: FormData = new FormData();
	//  	formdata.append('file', file);
	//  	const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
 	// 	  reportProgress: true,
	//  		  responseType: 'text'
	// 	});
	
	//  	return this.httpclient.request(req);
  //   }

    // public addImage(selectedFile:File, id:number):Observable<File>{
    //   // const url ='http://localhost:8083/image/upload/'
    //    const uploadImageData = new FormData();
    //    uploadImageData.append('imageFile', selectedFile, selectedFile.name)
    //    console.log(uploadImageData);
    //    return this.httpclient.post<File>(`http://localhost:8083/image/upload/${id}`,uploadImageData);
    //  }

     updateAd(id : number ,ad :adsModel): Observable <object>{
       return this.httpclient.put(`${this.u}/${id}`,ad);
     }
     getOne(id:number) : Observable<adsModel>{
       return this.httpclient.get<adsModel>(`${this.find}/${id}`)
     }
     deletead(id:number) :Observable<object>{
       return this.httpclient.delete(`${this.d}/${id}`);
     }
     ajouterFavouris(id:number,ad :adsModel) :Observable<object>{
       return this.httpclient.post(`${this.f}/${id}`,ad);
     }


     getchercher(title,category,city,type_ads): Observable<adsModel[]>{
      return this.httpclient.get<adsModel[]>(`${this.searche}${title}/${category}/${city}/${type_ads}`)
    }
    getfavoritelist() : Observable<FavorisModule[]>{
      return this.httpclient.get<FavorisModule[]>(this.all);   
   }
   estimatead(room:number,area:number,type_ads,city): Observable<number[]>{
    return this.httpclient.get<number[]>(`${this.e}${room}/${area}/${type_ads}/${city}`)
  }



}
