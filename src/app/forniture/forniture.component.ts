import { Component, OnInit } from '@angular/core';
import { Forniture } from './forniture.module';
import { FornitureService } from './forniture.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-forniture',
  templateUrl: './forniture.component.html',
  styleUrls: ['./forniture.component.css']
})
export class FornitureComponent implements OnInit {

  constructor(private ps :FornitureService) { }
  /*
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
  onUpload() {
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
 ListFornitures: Forniture [];
  ngOnInit(): void {
    this.ps.getFornitures().subscribe(x=>this.ListFornitures=x)
    console.log(this.ListFornitures)
  }

}
