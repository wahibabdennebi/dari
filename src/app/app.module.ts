import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import {  HttpClientModule } from '@angular/common/http';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FornitureComponent } from './forniture/forniture.component';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { PublishComponent } from './publish/publish.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';
import { FavorisComponent } from './favoris/favoris.component';
import { EstimationComponent } from './estimation/estimation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FornitureComponent,
    AddFornitureComponent,
    FooterComponent,
    AdsComponent,
    PublishComponent,
    UpdateAdComponent,
    FavorisComponent,
    EstimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
