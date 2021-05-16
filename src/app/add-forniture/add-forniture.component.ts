import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Forniture } from '../forniture/forniture.module';
import { FornitureService } from '../forniture/forniture.service';


@Component({
  selector: 'app-add-forniture',
  templateUrl: './add-forniture.component.html',
  styleUrls: ['./add-forniture.component.css']
})
export class AddFornitureComponent implements OnInit {

  constructor(private ps :FornitureService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  f=faInfoCircle;
public addFornutire(addForm:NgForm):void {
  this.ps.addFornitures(addForm.value).subscribe(
    (resoonse:Forniture)=>{
      for (let i = 0; i < this.selectedFile.length; i++) {
        this.currentFile = this.selectedFile[i];
        this.ps.addImage(this.currentFile,resoonse.furniture_id).subscribe((test:any)=>{
           
        })
          
        
        
       // alert("furniture add successfully")
      }
      
      Swal.fire('success', 'furniture add successfully', 'success');
     
      
     
    },
    (error:HttpErrorResponse)=>{
      Swal.fire('Oops...', 'Something went wrong!', 'error');
    },
  );
}
 
  selectedFile: FileList;
  currentFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files;
  }
 



}
