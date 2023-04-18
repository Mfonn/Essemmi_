import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoePageComponent } from './shoe-page/shoe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoePageComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   CarouselModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
