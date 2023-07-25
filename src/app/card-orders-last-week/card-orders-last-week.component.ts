import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DateCheckService } from '../services/date-check.service';

@Component({
  selector: 'app-card-orders-last-week',
  templateUrl: './card-orders-last-week.component.html',
  styleUrls: ['./card-orders-last-week.component.scss']
})
export class CardOrdersLastWeekComponent {
  orders: any = [];
  ordersLastWeek: any = [];
  ordersPreviousWeek: any = [];
  differenceToPrevWeek: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
    this.orders = this.dataservice.loadOrders().subscribe((orders) => {
      this.orders = orders;

      orders.forEach((ordersData: any) => {
        let orderObj: any = {};
        orderObj['createDate'] = ordersData['createDate'];
        orderObj['lastName'] = ordersData['lastName'];
        if(this.dateCheckService.checkPreviousNDays(ordersData['createDate'], 7)) {
        this.ordersLastWeek.push(orderObj);
      } else if (this.dateCheckService.checkPreviousNDays(ordersData['createDate'], 14)) {
        this.ordersPreviousWeek.push(orderObj)
      }
      });

      console.log("usersLastWeek", this.ordersLastWeek);
      console.log("usersPreviousWeek", this.ordersPreviousWeek);
      
      
      this.differenceToPrevWeek = this.dateCheckService.calculateChangeRate(this.ordersLastWeek.length, this.ordersPreviousWeek.length);
    });
  }
}
