import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DateCheckService } from 'src/app/services/date-check.service';

@Component({
  selector: 'app-card-users-last-month',
  templateUrl: './card-users-last-month.component.html',
  styleUrls: ['./card-users-last-month.component.scss']
})
export class CardUsersLastMonthComponent {
  users: any = [];
  usersLastMonth: any = [];
  usersPreviousMonth: any = [];
  differenceToPrevMonth: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
  

    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;
      // console.log("Users are", this.users);

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['createDate'] = userData['createDate'];
        userObj['lastName'] = userData['lastName'];
        if(this.dateCheckService.checkPreviousNMonth(userData['createDate'], 1)) {
        this.usersLastMonth.push(userObj);
      } else if (this.dateCheckService.checkPreviousNMonth(userData['createDate'], 2)) {
        this.usersPreviousMonth.push(userObj)
      }
      });

      console.log("usersLastMonth", this.usersLastMonth);
      console.log("usersPreviousMonth", this.usersPreviousMonth);
      
      
      this.differenceToPrevMonth = this.dateCheckService.calculateChangeRate(this.usersLastMonth.length, this.usersPreviousMonth.length);
    });

  }

}

