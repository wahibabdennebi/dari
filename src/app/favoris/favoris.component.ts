import { FavorisModule } from './favoris.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdsServiceService } from '../ads-service.service';
import { adsModel } from '../ads/adsModel';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
test:FavorisModule;
  adslist:adsModel[];
  f:FavorisModule[];
  id:number;
ad : adsModel =new adsModel();
a:any;
retrievedImage: any;
          base64Data: any;
    retrieveResonse: any;
   
  idad:number;
  title:string;
  category:any;
  city:any;
  type_ads:any;
  constructor(private favoris:AdsServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getfavorite();
      this.id =this.route.snapshot.params['id'];
  }

  // private getfavorite() {
  //   this.favoris.getfavoritelist().subscribe((data:adsModel[])=>{
  //     this.adslist=data;

  //     console.log(this.adslist);
  //     for (let x of this.adslist){
        
        
          
  //       // this.a='data:image/jpeg;base64,' + i.picByte;
  //       // console.log(this.a);


  //       this.base64Data=x.img.picByte;
  //         x.img= 'data:image/jpeg;base64,' + this.base64Data;
  //        console.log(x);


      
        
  //     }
      
  //   });  
  // }

  private getfavorite() {
      this.favoris.getfavoritelist().subscribe((data)=>{
        this.f=data
      console.log(this.f)
      
      
})
  }
}
