import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DateCheckService } from 'src/app/services/date-check.service';

@Component({
  selector: 'app-card-users-last-week',
  templateUrl: './card-users-last-week.component.html',
  styleUrls: ['./card-users-last-week.component.scss']
})
export class CardUsersLastWeekComponent {
  users: any = [];
  usersLastWeek: any = [];
  usersPreviousWeek: any = [];
  differenceToPrevWeek: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;
      // console.log("Users are", this.users);

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['createDate'] = userData['createDate'];
        userObj['lastName'] = userData['lastName'];
        if(this.dateCheckService.checkPreviousNDays(userData['createDate'], 7)) {
        this.usersLastWeek.push(userObj);
      } else if (this.dateCheckService.checkPreviousNDays(userData['createDate'], 14)) {
        this.usersPreviousWeek.push(userObj)
      }
      });

      console.log("usersLastWeek", this.usersLastWeek);
      console.log("usersPreviousWeek", this.usersPreviousWeek);
      
      
      this.differenceToPrevWeek = this.dateCheckService.calculateChangeRate(this.usersLastWeek.length, this.usersPreviousWeek.length);
    });
  }

}
