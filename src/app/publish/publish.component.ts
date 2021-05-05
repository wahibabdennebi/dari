
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AdsServiceService } from './../ads-service.service';
import { adsModel } from './../ads/adsModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,ReactiveFormsModule, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
 
   ad:adsModel=new adsModel();
   selectedFile: File=null;
   userFile:File ;
  public imagePath;
  imgURL: any;
  public message: string
  
  

  constructor(public adsservice:AdsServiceService,private router:Router) { }


  ngOnInit(): void {
    
  }
  
  // savead(){
  //   this.adsservice.create(this.ad).subscribe ((res:adsModel)=>{
  //     console.log(res.id_ad);
  //     this.adsservice.addImage(this.userFile,res.id_ad).subscribe();
  //     this.router.navigate(['/Ads'])
    
  //   },
  //   error=>console.log(error));
    
  // }
  // GotolistOfAds(){
    
  // }
  savead(){
    this.adsservice.create(this.ad).subscribe(data=>{
      console.log(data)
    })
  }






//   onSelectFile(event) {
//     if (event.target.files.length > 0)
//     {
//       const file = event.target.files[0];
//       this.userFile = file;
     
 
//     var mimeType = event.target.files[0].type;
//     if (mimeType.match(/image\/*/) == null) {
//       this.message = "Only images are supported.";
//       return;
//     }
 
//     var reader = new FileReader();
    
//     this.imagePath = file;
//     reader.readAsDataURL(file); 
//     reader.onload = (_event) => { 
//       this.imgURL = reader.result; 
//     }
//   }
// }
onsubmit(){
  
  this.savead();
  this.router.navigate(['/Ads']);
}
}


  //  addData() {
    
  //  const formData = new  FormData();
  //  const adsModel = this.dataForm.value;
  //  formData.append('adsModel',JSON.stringify(adsModel));
  //  formData.append('file',this.userFile);
  //   this.adsservice.createData(formData).subscribe( data => {
  //     console.log(this.dataForm);
  //   console.log(data);
  //    this.router.navigate(['/Ads']); 
  //   });
  //  }
  
  


  //  OnFileSelected(event){
  //    this.selectedFile =event.target.files[0];
  //  }
  // OnUploed(){
  //   const fd =new FormData();
  //   fd.append('image',this.selectedFile,this.selectedFile.name);
  //   this.adsservice.create(this.ad.image).subscribe(data=>{
  //     console.log(data);

  //   })
  //   }
  




