import { Component, OnInit, TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Forniture } from '../forniture/forniture.module';
import { FornitureService } from '../forniture/forniture.service';
import { Promotion } from './promotion.module';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private service :FornitureService,private modalService: BsModalService) { }
  modalRef: BsModalRef;
  listPromotions:Promotion[]
  ngOnInit(): void {
    this.getList();
  }


  openModal(templateupdate: TemplateRef<any>){
    this.modalRef = this.modalService.show(templateupdate);  
  }
  public getList(){
    this.service.getListPromtions().subscribe(
      (data:Promotion[])=>{
        this.listPromotions=data
        console.log(this.listPromotions)
      }
    )}
      public addPromtion(addPromotion:NgForm):void {
        this.service.addPromotion(addPromotion.value).subscribe(
          (data:Promotion)=>{
            addPromotion.reset();
            this.modalRef.hide();
            this.getList();
            
          }
        )
      }

      public exuterPromotion(id:number)
      {
        this.service.exuterPromotion(id).subscribe(
          (date:Forniture[])=>{
            this.service.passPomotionFurniture(date);
            console.log(date);
          }
        )
      }
}
