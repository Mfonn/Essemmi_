import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.scss']
})
export class ShoePageComponent {
  index = 0;
  divs = ["div1", "div2", "div3"]
  popup: any;
popup2: any;

  next(){
    let currentDiv = this.divs[this.index];
    document.getElementById(currentDiv)!.style.display = "none";
    this.index = (this.index + 1) % this.divs.length;
    currentDiv = this.divs[this.index]
    document.getElementById(currentDiv)!.style.display = "flex";
  }

  previous(){
    let currentDiv = this.divs[this.index];
    document.getElementById(currentDiv)!.style.display = "none";
    this.index = (this.index - 1) % this.divs.length;
    currentDiv = this.divs[this.index]
    document.getElementById(currentDiv)!.style.display = "flex";
  }

  constructor(public dialog : MatDialog){}

  openMenu(){
  this.dialog.open(MenuComponent)
  }
}
