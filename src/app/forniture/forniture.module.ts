import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FornitureModule { }

export class Forniture {
   furniture_id :number ;
     price :number ;
	 description:String;
	 titre:String;
   state: boolean;
   retrievedImage: any;
  
}