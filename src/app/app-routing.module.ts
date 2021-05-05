import { AdsComponent } from './ads/ads.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FornitureComponent } from './forniture/forniture.component';
import { PublishComponent } from './publish/publish.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';
import { FavorisComponent } from './favoris/favoris.component';
import { EstimationComponent } from './estimation/estimation.component';




const routes: Routes = [
  {path:"AddForniture", component:AddFornitureComponent},
  {path:"getForniture",component:FornitureComponent},
  {path:"Ads",component:AdsComponent},
  {path:"Publish",component:PublishComponent},
  {path:"update/:id",component:UpdateAdComponent},
  {path:"favoris/:idd",component:FavorisComponent},
  {path:"estimation",component:EstimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
