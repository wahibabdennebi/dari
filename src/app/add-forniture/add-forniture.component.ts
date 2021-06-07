import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
public addFornutire(addForm:NgForm):void {
  this.ps.addFornitures(addForm.value).subscribe(
    (resoonse:Forniture)=>{
      this.ps.addImage(this.selectedFile,resoonse.furniture_id).subscribe()
      console.log(resoonse)
      alert("furniture add successfully")
     
    },
    (error:HttpErrorResponse)=>{
      alert("not okay");
    },
  );
}
 
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
 /* onUpload() {
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8081/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
              if (response.status === 200) {
                this.message = 'Image uploaded successfully';
              } else {
                this.message = 'Image not uploaded successfully';

              }
      
            }
           );
     
        }
*/


}
