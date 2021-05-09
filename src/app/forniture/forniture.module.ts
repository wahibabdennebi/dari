import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { image } from './image.module';



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
   listImages:image [];
  city:city;
  type:type;
}
enum type {
	Meuble,Accesoires,All

}
enum city {
  Bizerte,Beja,Jendouba,Kef,Zaghouan,Ariana,Ben_arous,
  Tunis,Mannouba,Nabeul,Sousse,Mounastir,Mahdia,Kasserine,
  Gafsa,Sfax,Gabes,Tataouin,Medennine,Touzuer,Kebeli,
  Sidi_bouzid
}