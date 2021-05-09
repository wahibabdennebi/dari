import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FornitureCostumerComponent } from './forniture-costumer/forniture-costumer.component';
import { FornitureComponent } from './forniture/forniture.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { PromotionComponent } from './promotion/promotion.component';




const routes: Routes = [
  {path:"AddForniture", component:AddFornitureComponent},
  {path:"getForniture",component:FornitureComponent},
  {path:"FornitureCostumer",component:FornitureCostumerComponent},
  {path:"order",component:OrderComponent},
  {path:"payment",component:PaymentComponent},
  {path:"promotion",component:PromotionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
