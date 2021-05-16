import { Component, OnInit, TemplateRef } from '@angular/core';
import { Forniture } from './forniture.module';
import { FornitureService } from './forniture.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-forniture',
  templateUrl: './forniture.component.html',
  styleUrls: ['./forniture.component.css']
})
export class FornitureComponent implements OnInit {

  constructor(private ps :FornitureService,private modalService: BsModalService) { 
    
  }
  f= faThumbtack;
  retrievedImage: any[];
  base64Data: any;
  retrieveResonse: any;
  test:boolean=false;
  modalRef: BsModalRef;
  DetailsF:Forniture;
  
 ListFornitures:Forniture[];
 ListFornituresProm:Forniture[];
  ngOnInit(): void {
   this.getList() 
    this.getlistfurniturePrmotion();
    
   //this.clickbu();
  }

   

  getlistfurniturePrmotion(){
  this.ListFornituresProm=  this.ps.returnPomotionFurniture()
  
  }


clickbu(){
  
  let btn = document.getElementById("coolbutton");
    btn.addEventListener("click", (e:Event) =>this.exuterpromtion())
    console.log("test")
}
  getList(){
    this.ps.getFornitures().subscribe(
      (response:Forniture [])=>{
       this.ListFornitures=response;
         console.log(this.ListFornitures);
         for (let i of this.ListFornitures) { 
           for(let x of i.listImages){
            x.picByte='data:image/jpeg;base64,'+x.picByte;
            
            // console.log(x);

           }
           }
           for (let i of this.ListFornitures) { 
           for(let z of this.ListFornituresProm)
           {
             if(i.furniture_id==z.furniture_id){
                i.price=z.price
             }
           }}

      } 
      ) ;return true
     }
  
  searchFornutire(searchForm:NgForm){
    this.ps.getchercher(searchForm.value).subscribe(
      (res:Forniture[])=>{
        this.ListFornitures=res;
        
  })}


  addorder(f:Forniture){
    this.ps.addOrderToStripe(f.furniture_id).subscribe();
  }

    exuterpromtion(){
      console.log(this.ListFornitures)
      for(let i of this.ListFornitures){
        for(let x of this.ListFornituresProm)
        {
          if(i.furniture_id==x.furniture_id){
              console.log(i.furniture_id)
          }
        }
      }
    }

    openModal(template: TemplateRef<any>,forniture: Forniture) {
      this.modalRef = this.modalService.show(template);
      this.DetailsF=forniture
      console.log(this.DetailsF)
      
    }








    //slick-carousel
   title = 'ngSlick';
   slides=[];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }




}
