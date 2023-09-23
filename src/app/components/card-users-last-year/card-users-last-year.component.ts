import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DateCheckService } from 'src/app/services/date-check.service';

@Component({
  selector: 'app-card-users-last-year',
  templateUrl: './card-users-last-year.component.html',
  styleUrls: ['./card-users-last-year.component.scss']
})
export class CardUsersLastYearComponent {
  users: any = [];
  usersThisYear: any = [];
  usersPreviousYear: any = [];
  differenceToPrevYear: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;
      // console.log("Users are", this.users);

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['createDate'] = userData['createDate'];
        userObj['lastName'] = userData['lastName'];
        if(this.dateCheckService.checkPreviousNYears(userData['createDate'], 0)) {
        this.usersThisYear.push(userObj);
      } else if (this.dateCheckService.checkPreviousNYears(userData['createDate'], 1)) {
        this.usersPreviousYear.push(userObj)
      }
      });

      console.log("usersThisYear", this.usersThisYear);
      console.log("usersPreviousYear", this.usersPreviousYear);
      
      
      this.differenceToPrevYear = this.dateCheckService.calculateChangeRate(this.usersThisYear.length, this.usersPreviousYear.length);
    });
  }

}
