import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { BankComponent } from './bank/bank.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { CreditComponent } from './credit/credit.component';
import { FornitureComponent } from './forniture/forniture.component';
import { GetBankComponent } from './get-bank/get-bank.component';
import { GetBorrowerComponent } from './get-borrower/get-borrower.component';
import { GetVisitComponent } from './get-visit/get-visit.component';
import { MapComponent } from './map/map.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { UpdateBorrowerComponent } from './update-borrower/update-borrower.component';
import { UpdateVisitComponent } from './update-visit/update-visit.component';
import { VisitComponent } from './visit/visit.component';




const routes: Routes = [
  {path:"AddForniture", component:AddFornitureComponent},
  {path:"getForniture",component:FornitureComponent},
  {path:"Visit",component:VisitComponent},
  {path:"Bank",component:BankComponent},
  {path:"Borrower",component:BorrowerComponent},
  {path:"listVisit",component:GetVisitComponent},
  {path:"listBank",component:GetBankComponent},
  {path:"listBorrower",component:GetBorrowerComponent},
  {path:"credit",component:CreditComponent},
  {path:"map",component:MapComponent},
  {path:"update-bank/:id",component:UpdateBankComponent},
  {path:"update-borrower/:id",component:UpdateBorrowerComponent},
  {path:"update-visit/:id",component:UpdateVisitComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
