import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LikeToDesignComponent } from '../like-to-design/like-to-design.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'essemmi';

  images = [{
    imageSrc:
      'assets/images/shoe1.jpg',
    imageAlt: 'shoe1',
  },
  {
    imageSrc:
      'assets/images/shoe2.png',
    imageAlt: 'shoe2',
  },
  {
    imageSrc:
      'assets/images/shoe3.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      'assets/images/shoe4.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      'assets/images/shoe5.png',
    imageAlt: 'shoe3',
  }
]
  showNavbar: boolean | undefined;


constructor(public dialog : MatDialog){}

  openDialog(){
  this.dialog.open(LikeToDesignComponent)
  }

  openDialogg(){
    this.dialog.open(ChatComponent)
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.showNavbar = true;
      } else {
        this.showNavbar = false;
      }
    }



}



