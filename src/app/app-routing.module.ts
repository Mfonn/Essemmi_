import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { BeltPageComponent } from './belt-page/belt-page.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { FindsizeComponent } from './findsize/findsize.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'shoe', component: ShoePageComponent },
  { path: 'belt', component: BeltPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'findsize', component: FindsizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
