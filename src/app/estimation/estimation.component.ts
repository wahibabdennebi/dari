import { AdsServiceService } from './../ads-service.service';
import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {
  city:any;
  type_ads:any;
  room:number;
  area:number;
  resulat:any;
  
  dhia  =false;

  constructor(private estim:AdsServiceService ,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onsubmitt(){

     this.estim.estimatead(this.room,this.area,this.type_ads,this.city).subscribe(data=>{
      this.resulat=data;
      this.dhia=true;
       console.log(this.resulat)
       
      Swal.fire({
        title:"Hey sir thank you for trusting us your estimate price  In Euros is between",
        text:this.resulat ,
        showCancelButton: true,
        icon:"success"
      })
     
      
     })
     
    
  }
  oncreate(){
    this.dialog.open(EstimationComponent);
  }

}
