import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-users-last-month',
  templateUrl: './card-users-last-month.component.html',
  styleUrls: ['./card-users-last-month.component.scss']
})
export class CardUsersLastMonthComponent {
  allUsers: any = [];
  users: any = [];
  totalUsers: any = 0;
  usersLastMonth: any = [];
  usersPreviousMonth: any = [];
  differenceToPrevMonth: string = "0";

  constructor(public dataservice: DataService) {
  

    this.users = this.dataservice.loadUsers().subscribe((users) => {
      this.users = users;
      console.log("Users are", this.users);

      users.forEach((userData: any) => {
        let userObj: any = {};
        userObj['createDate'] = userData['createDate'];
        userObj['lastName'] = userData['lastName'];
        if(this.checkLastMonth(userData['createDate'])) {
        this.usersLastMonth.push(userObj);
      } else if (this.checkPreviousMonth(userData['createDate'])) {
        this.usersPreviousMonth.push(userObj)
      }
      });
      
      this.calculate(this.usersLastMonth.length, this.usersPreviousMonth.length);
    });

  }


getToday() {
  // const month = new Date(Date.now()).getMonth();
  // const year = new Date(Date.now()).getFullYear();

  // console.log("Today", Date.now());
  // console.log("Month", month);
  // console.log("Year", year);
}

checkLastMonth(date: number) {
  const month = new Date(Date.now()).getMonth();
  const year = new Date(Date.now()).getFullYear();

  console.log("Today", Date.now());
  console.log("Month", month);
  console.log("Year", year);

  const dateToCheck = date;
  const monthToCheck = new Date(dateToCheck).getMonth();
  const yearToCheck = new Date(dateToCheck).getFullYear();

  console.log("dateToCheck", dateToCheck);
  console.log("monthToCheck", monthToCheck);
  console.log("yearToCheck", yearToCheck);

  let monthDiff = month - monthToCheck;
  let yearDiff = year - yearToCheck;

  console.log("monthDiff", monthDiff);
  console.log("yearDiff", yearDiff);

  
    if (yearDiff === 0 && monthDiff === 1 
      || yearDiff === 1 && monthDiff === -11) 
      {
      console.log(true)
      return true;
    } else {
      console.log(false);
      return false;
    }
}


checkPreviousMonth(date: number) {
  const month = new Date(Date.now()).getMonth();
  const year = new Date(Date.now()).getFullYear();

  console.log("Today", Date.now());
  console.log("Month", month);
  console.log("Year", year);

  const dateToCheck = date;
  const monthToCheck = new Date(dateToCheck).getMonth();
  const yearToCheck = new Date(dateToCheck).getFullYear();

  console.log("dateToCheck", dateToCheck);
  console.log("monthToCheck", monthToCheck);
  console.log("yearToCheck", yearToCheck);

  let monthDiff = month - monthToCheck;
  let yearDiff = year - yearToCheck;

  console.log("monthDiff", monthDiff);
  console.log("yearDiff", yearDiff);

  
    if (yearDiff === 0 && monthDiff === 2 || yearDiff === 1 && monthDiff === -10) //TODO needs to be more options to make sure Nov-Jan and Dec-Feb are covered
    {
      console.log(true)
      return true;
    } else {
      console.log(false);
      return false;
    }
}

calculate(input1: number, input2: number) {
let result = ((input1 / input2 * 100)-100).toFixed(1);
this.differenceToPrevMonth = result;
}

}

