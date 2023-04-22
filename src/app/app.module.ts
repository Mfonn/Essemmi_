import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ChatComponent } from './chat/chat.component';
import { Carousel2Module } from "./carousel2/carousel2.module";



@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ShoePageComponent,
        LikeToDesignComponent,
        BeltPageComponent,
        ChatComponent,
    ],
    // imports: [
    //   BrowserModule,
    //   AppRoutingModule,
    //   CarouselModule
    // ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CarouselModule,
        MatIconModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        Carousel2Module
    ]
})
export class AppModule { }
