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
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { FindsizeComponent } from './findsize/findsize.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ShoePageComponent,
        LikeToDesignComponent,
        BeltPageComponent,
        ChatComponent,
        LoginComponent,
        CartComponent,
        ForgotpasswordComponent,
        SignupComponent,
        FindsizeComponent,
        CheckoutComponent,
        PaymentComponent,
        OrderComponent,
        MenuComponent,
        NotificationComponent,
        LogoutComponent,
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
