import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import {  HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FornitureComponent } from './forniture/forniture.component';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FooterComponent } from './footer/footer.component';
import { VisitComponent } from './visit/visit.component';
import { BankComponent } from './bank/bank.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { CreditComponent } from './credit/credit.component';
import { GetBankComponent } from './get-bank/get-bank.component';
import { GetBorrowerComponent } from './get-borrower/get-borrower.component';
import { GetVisitComponent } from './get-visit/get-visit.component';
import { MapComponent } from './map/map.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { UpdateBorrowerComponent } from './update-borrower/update-borrower.component';
import { UpdateVisitComponent } from './update-visit/update-visit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FornitureComponent,
    AddFornitureComponent,
    FooterComponent,
    VisitComponent,
    BankComponent,
    BorrowerComponent,
    CreditComponent,
    GetBankComponent,
    GetBorrowerComponent,
    GetVisitComponent,
    MapComponent,
    UpdateBankComponent,
    UpdateBorrowerComponent,
    UpdateVisitComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
