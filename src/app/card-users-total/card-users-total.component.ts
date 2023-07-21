import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-users-total',
  templateUrl: './card-users-total.component.html',
  styleUrls: ['./card-users-total.component.scss'],
})
export class CardUsersTotalComponent {
  allUsers: any = [];
  users: any = [];
  totalUsers: any = 0;

  constructor(public dataservice: DataService) {
    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;


      this.totalUsers = users.length;

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['id'] = userData['customIdName'];
        this.allUsers.push(userObj);
      });

    });
  }
}
