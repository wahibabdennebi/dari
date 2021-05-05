import { AdsServiceService } from './../ads-service.service';
import { Component, OnInit } from '@angular/core';

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
  resulat:number[];
  
  dhia  =false;

  constructor(private estim:AdsServiceService) { }

  ngOnInit(): void {
  }

  onsubmitt(){
    this.estim.estimatead(this.room,this.area,this.type_ads,this.city).subscribe(data=>{
      this.resulat=data;
      this.dhia=true;
      console.log(this.resulat)
    })
  }

}
