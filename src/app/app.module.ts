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
import { PackComponent } from './pack/pack.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackService } from './pack/pack.service';
import { GetPackComponent } from './get-pack/get-pack.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivraisonService } from './livraison/livraison.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FornitureComponent,
    AddFornitureComponent,
    FooterComponent,
    PackComponent,
    GetPackComponent,
    LivraisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule ,
    
    
  
  ],
  providers: [PackService,LivraisonService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
