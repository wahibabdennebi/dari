import { AdsServiceService } from './../ads-service.service';
import { adsModel } from './adsModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EstimationComponent } from '../estimation/estimation.component';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

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
    i:number;
    num:number;
  idad:number;
  title:string;
  category:any;
  city:any;
  type_ads:any;
  test=false;
  totalLength:any;
  page:number=1;
  show: boolean = false;
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
    this.adslist=data; 
  this.totalLength=data.length;
  
  
  })
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

    moredetails(i){
      this.show=true;
this.num=i;
    }
    oncreateestimation(){
     let dialogRef= this.dialog.open(EstimationComponent);
     dialogRef.afterClosed().subscribe(data=>{
       
     })
    }



    public openPDF():void {
      var DATA = document.getElementById('genepdf');
        
      html2canvas(DATA).then(canvas => {
          
          var imgWidth = 309;
          var pageHeight = 295;
          var imgHeight =canvas.height * imgWidth /canvas.width;
          var heightleft=imgHeight;
          
          var contentDataUrl = canvas.toDataURL("image/jpg")
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(contentDataUrl,'JPG' ,0, position,imgWidth, imgHeight)
          
          PDF.save('angular-demo.pdf');
      });     
    }




}
