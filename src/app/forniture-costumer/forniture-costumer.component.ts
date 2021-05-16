import { Component, OnInit, TemplateRef } from '@angular/core';
import { Forniture, FornitureModule } from '../forniture/forniture.module';
import { FornitureService } from '../forniture/forniture.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forniture-costumer',
  templateUrl: './forniture-costumer.component.html',
  styleUrls: ['./forniture-costumer.component.css']
})
export class FornitureCostumerComponent implements OnInit {
  modalRef: BsModalRef;
  ListFor:Forniture[];
  public editForniture:Forniture;
  public deleteForniture:Forniture;
  selectedFile: File;
  constructor(private ps :FornitureService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.get()
  }

        get(){
          this.ps.getAllFornituresByCostumerId(1).subscribe(
            (response:Forniture[])=>{
             this.ListFor=response;
             console.log(response);
             for (let i of this.ListFor) { 
              for(let x of i.listImages){
               x.picByte='data:image/jpeg;base64,'+ x.picByte;
              }}
            })
        }

  updateFornutire(updateForm:NgForm):void {
    this.ps.updateFornitures(updateForm.value).subscribe(
      (resoonse:Forniture)=>{
        console.log(updateForm.value);
        this.ps.addImage(this.selectedFile,resoonse.furniture_id).subscribe()
        Swal.fire('success', 'furniture update successfully', 'success');
       this.get()
      },
      (error:HttpErrorResponse)=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      },
    );
    
         
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  updateModal(templateupdate: TemplateRef<any>,forniture: Forniture){
    this.modalRef = this.modalService.show(templateupdate);
    this.editForniture=forniture;
    console.log(this.editForniture);
  }
  
  openModal(template: TemplateRef<any>,forniture: Forniture) {
    this.modalRef = this.modalService.show(template);
    this.deleteForniture=forniture;
    console.log(this.deleteForniture);
  }
        test(forniture: Forniture){
          this.deleteForniture=forniture;
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.deleteFor()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.get()
            }
          })
        }
  deleteFor(){
    this.ps.deleteForniture(this.deleteForniture.furniture_id).subscribe(
     
    )
  }
}
