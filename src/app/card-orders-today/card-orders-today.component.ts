import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DateCheckService } from '../services/date-check.service';

@Component({
  selector: 'app-card-orders-today',
  templateUrl: './card-orders-today.component.html',
  styleUrls: ['./card-orders-today.component.scss']
})
export class CardOrdersTodayComponent {
  orders: any = [];
  ordersLastDay: any = [];
  ordersPreviousDay: any = [];
  differenceToPrevDay: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
    this.orders = this.dataservice.loadUsers().subscribe((orders) => {
      this.orders = orders;
      // console.log("Users are", this.users);

      orders.forEach((orderData: any) => {
        let orderObj: any = {};
        orderObj['createDate'] = orderData['createDate'];
        orderObj['lastName'] = orderData['lastName'];
        if(this.dateCheckService.checkPreviousNDays(orderData['createDate'], 1)) {
        this.ordersLastDay.push(orderObj);
      } else if (this.dateCheckService.checkPreviousNDays(orderData['createDate'], 2)) {
        this.ordersPreviousDay.push(orderObj)
      }
      });

      console.log("usersLastDay", this.ordersLastDay);
      console.log("usersPreviousDay", this.ordersPreviousDay);
      
      
      this.differenceToPrevDay = this.dateCheckService.calculateChangeRate(this.ordersLastDay.length, this.ordersPreviousDay.length);
    });
  }
}
