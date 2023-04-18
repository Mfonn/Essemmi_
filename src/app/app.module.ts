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
import { LikeToDesignComponent } from './like-to-design/like-to-design.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BeltPageComponent } from './belt-page/belt-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoePageComponent,
    LikeToDesignComponent,
    BeltPageComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
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
