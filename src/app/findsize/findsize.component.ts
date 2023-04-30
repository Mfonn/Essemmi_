import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-findsize',
  templateUrl: './findsize.component.html',
  styleUrls: ['./findsize.component.scss']
})
export class FindsizeComponent {
  constructor(public dialog : MatDialog){}

  openMenu(){
  this.dialog.open(MenuComponent)
  }
}
