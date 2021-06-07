import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMyOptions } from 'ng-uikit-pro-standard';
import { Pack, Type_Pack } from './pack';
import { PackService } from './pack.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css'],
})
export class PackComponent implements OnInit {

type_Pack:any;

  //pack:Pack=new Pack("",0,this.type_Pack);
  
  closeResult: string;
  PackService: any;

  constructor(private modalService:NgbModal,private service:PackService) { }

  

  ngOnInit(): void {
    
  }


  public ajouterPack(addForm:NgForm):void {
    this.service.ajouterpack(addForm.value).subscribe()

      {};
      
      
  }











  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }}
  
      public myDatePickerOptions: IMyOptions = {
      // Your options
      };


      



  

}
