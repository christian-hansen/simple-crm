import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  allUsers: any = [];

  constructor(public dialog: MatDialog, private dataservice: DataService) {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.dataservice.loadUsers().subscribe((users) => {
      this.allUsers = users;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
