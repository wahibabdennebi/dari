import { AdsServiceService } from './../ads-service.service';
import { adsModel } from './adsModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EstimationComponent } from '../estimation/estimation.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
adslist:adsModel[];
  constructor(private adservice :AdsServiceService ,private router:Router,private dialog: MatDialog) { }
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
  test=false;
 
  cherche:adsModel[];
  recherche: adsModel =new adsModel();


  ngOnInit(): void {
    this.getads();
  }
// private getads() {
//       this.adservice.getAdslist().subscribe((data:adsModel[])=>{
//         this.adslist=data;

//         console.log(this.adslist);
//         for (let x of this.adslist){
          
          
            
//           // this.a='data:image/jpeg;base64,' + i.picByte;
//           // console.log(this.a);


//           this.base64Data=x.img.picByte;
//             x.img= 'data:image/jpeg;base64,' + this.base64Data;
//            console.log(x);


        
          
//         }
        
//       });  
//     }
getads(){
  this.adservice.getAdslist().subscribe((data:adsModel[])=>{
    this.adslist=data; })
}
    ajouterfavoris(idd:number){
      this.adservice.ajouterFavouris(idd,this.ad).subscribe(data=>{

        console.log(idd);
      })
    }
    updatead(id : number){
      this.router.navigate(['update',id]);
    }
    delete(id :number){
      this.adservice.deletead(id).subscribe(data=>{
        this.getads();
      })
    }

    public getchercher() {
      this.adservice.getchercher(this.title,this.category,this.city,this.type_ads).subscribe((data)=>{
       
        this.adslist=data;
       console.log(this.adslist)
     
      }); 
 
     
    }
    onsubmitt(){
      
      this.getchercher();
    }
    onretour(){
      // this.adservice.getAdslist().subscribe(data=>{
      //   this.adslist=data;
      //   console.log(this.adslist)
      
      // });  
      this.getads();
    }

    moredetails(){
this.test=true;
    }
    oncreateestimation(){
     let dialogRef= this.dialog.open(EstimationComponent);
     dialogRef.afterClosed().subscribe(data=>{
       
     })
    }



}
