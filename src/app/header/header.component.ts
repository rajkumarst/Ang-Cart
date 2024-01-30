import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserInfoComponent } from '../user/user-info/user-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(event: any) {
    const targetLoc = event.currentTarget.getBoundingClientRect();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: targetLoc.y + targetLoc.height + 10 + "px",
      right: targetLoc.x,
      // left: targetLoc.x - targetLoc.width - 20 + "px"
    };
    const dialogRef = this.dialog.open(UserInfoComponent, dialogConfig);
  }
}
