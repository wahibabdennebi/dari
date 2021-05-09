import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forniture } from '../forniture/forniture.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderModuleModule { }
export class order{
  idOrder:number;
  furniture:Forniture
}