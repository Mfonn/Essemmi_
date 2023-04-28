import { Component } from '@angular/core';

@Component({
  selector: 'app-belt-page',
  templateUrl: './belt-page.component.html',
  styleUrls: ['./belt-page.component.scss']
})
export class BeltPageComponent {
  index = 0;
  divs = ["div1", "div3"]
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
}
