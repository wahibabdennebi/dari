import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PromotionModule { }
export class Promotion {
  datedebut:any;
  datefin:any;
  value:number; 
 type:type;
}
enum type {
	Meuble,Accesoires,All
}