import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from '../pack/pack';
import { PackService } from '../pack/pack.service';

@Component({
  selector: 'app-get-pack',
  templateUrl: './get-pack.component.html',
  styleUrls: ['./get-pack.component.css']
})
export class GetPackComponent implements OnInit {
id: any;
  pack:Pack[];
  test:Pack;
  email: any;
  constructor(private service:PackService,private router:Router) { }

  ngOnInit(): void {
   // let resp=this.service.getpacks();
    //resp.subscribe(x=>this.pack=x)
    

      
  }
  public getpack(id:number){
    this.service.getpack(this.id).subscribe((data:Pack)=>{this.test=data
      console.log(this.test)} )
    
    ;
    
   }

   exportPdf(){
    this.service.exportPdf().subscribe(x =>{
      const blob=new Blob([x],{type:'application/pdf'});
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
  
    const data=window.URL.createObjectURL(blob);
    const link=document.createElement('a');
    link.href=data;
    link.download='pack.pdf';
    link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
    setTimeout(function(){
      window.URL.revokeObjectURL(data);
      link.remove();
    },100);
    });
  }
public dorappel(pack:Pack){
  let resp= this.service.rappel(this.pack);
  resp.subscribe()

}
public dosendsms(pack:Pack){
  let resp= this.service.sendsms(this.pack);
  resp.subscribe();
}
public dodelete(id){
  let resp= this.service.deletepack(id);
  resp.subscribe((data:Pack)=>{this.test=data
    console.log(this.test)});
}
public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.test=data);
 }
}
