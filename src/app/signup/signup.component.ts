import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent {
  constructor(public dialog : MatDialog){}

  openMenu(){
  this.dialog.open(MenuComponent)
  }
}
