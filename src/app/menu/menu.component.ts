import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public dialog : MatDialog){}

  openNotifications(){
  this.dialog.open(NotificationComponent)
  }

  openLogOut(){
    this.dialog.open(LogoutComponent)
    }
}
