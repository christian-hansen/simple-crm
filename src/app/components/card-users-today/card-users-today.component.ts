import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DateCheckService } from 'src/app/services/date-check.service';

@Component({
  selector: 'app-card-users-today',
  templateUrl: './card-users-today.component.html',
  styleUrls: ['./card-users-today.component.scss']
})
export class CardUsersTodayComponent {
  users: any = [];
  usersLastDay: any = [];
  usersPreviousDay: any = [];
  differenceToPrevDay: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;
      // console.log("Users are", this.users);

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['createDate'] = userData['createDate'];
        userObj['lastName'] = userData['lastName'];
        if(this.dateCheckService.checkPreviousNDays(userData['createDate'], 1)) {
        this.usersLastDay.push(userObj);
      } else if (this.dateCheckService.checkPreviousNDays(userData['createDate'], 2)) {
        this.usersPreviousDay.push(userObj)
      }
      });

      console.log("usersLastDay", this.usersLastDay);
      console.log("usersPreviousDay", this.usersPreviousDay);
      
      
      this.differenceToPrevDay = this.dateCheckService.calculateChangeRate(this.usersLastDay.length, this.usersPreviousDay.length);
    });
  }
}
