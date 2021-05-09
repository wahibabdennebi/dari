import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FornitureService } from '../forniture/forniture.service';
import { order } from '../order-module/order-module.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
test:order
price:number
modalRef: BsModalRef;
  constructor(private service :FornitureService,private modalService: BsModalService) { }

  ngOnInit(): void {
  this.test= this.service.returnData();
  this.price=this.test.furniture.price;
  
  
  }
  
public addCarteStripe(addcarte:NgForm):void{
  console.log(addcarte.value)
  this.service.addCarteToStripe(addcarte.value).subscribe(
    (resoonse:any)=>{
     // console.log(resoonse)
   
    console.log("okay");
    }
  );
 
}

      public confirmOrder()
      {
        console.log(this.test)
        this.service.confirmerToStripe(this.test).subscribe
        (
        )
      }
      updateModal(templateupdate: TemplateRef<any>){
        this.modalRef = this.modalService.show(templateupdate);
        this.modalRef.hide()
        
      }
}
