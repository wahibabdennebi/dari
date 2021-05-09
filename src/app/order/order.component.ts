import { Component, OnInit, TemplateRef } from '@angular/core';
import { FornitureService } from '../forniture/forniture.service';
import { order } from '../order-module/order-module.module';
import {Router} from '@angular/router'; 
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
listOrder:order[];
price :number=0;
test:order;
method:string="point";
modalRef: BsModalRef;
text:String=""

  constructor( private service :FornitureService,private route:Router,private modalService: BsModalService) {}

  ngOnInit(): void {
    this.service.getorder().subscribe(
      (response:order[])=>{
        this.listOrder=response;
       for (let i of this.listOrder) { 
          this.price=this.price+i.furniture.price
          
        
        }} 
    )
  }

          openModalPoint(templatePoint: TemplateRef<any>){
            this.modalRef = this.modalService.show(templatePoint);  
            this.modalRef.hide()
          }
            openModal(templateupdate: TemplateRef<any>){
            this.modalRef = this.modalService.show(templateupdate);  
          }

  
            public sentOrder(test :order){
          this.test=test;
          this.service.passData(this.test);
          //this.route.navigate(['/payment']);

            }
            
            checkMethod(methodForm:NgForm,templatePoint: TemplateRef<any>){
              if(methodForm.value.carte){
                this.modalRef.hide();
                this.route.navigate(['/payment'])
              }
              if(methodForm.value.point){
                this.modalRef = this.modalService.show(templatePoint);

              }
              
            }

            buyWithLoyaltyPoint(){
              this.service.buyWithLoyaltyPoint(1,this.test.furniture.furniture_id,this.method).subscribe(
                (res:string)=>{
                  this.text=res
                  console.log(res)
                }
              )
            }

  }
