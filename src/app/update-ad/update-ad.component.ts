import { adsModel } from './../ads/adsModel';
import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../ads-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {
  ad:adsModel=new adsModel();
  a:adsModel=new adsModel();
  selectedFile: File=null;
  userFile:File ;
 public imagePath;
 imgURL: any;
 public message: string
id : number;
  constructor( private update:AdsServiceService , private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     this.id =this.route.snapshot.params['id'];
     this.update.getOne(this.id).subscribe(data=>{
       this.ad=data;
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
  this.update.updateAd(this.id,this.ad).subscribe(data =>{
this.gotoad();
  })
}

gotoad(){
  this.router.navigate(['/Ads'])
}



}
