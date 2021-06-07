import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FornitureComponent } from './forniture/forniture.component';
import { GetPackComponent } from './get-pack/get-pack.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PackComponent } from './pack/pack.component';




const routes: Routes = [
  {path:"AddForniture", component:AddFornitureComponent},
  {path:"getForniture",component:FornitureComponent},
  {path : "pack",component:PackComponent},
  {path:"getPack",component:GetPackComponent},
  {path:"livraison",component:LivraisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
