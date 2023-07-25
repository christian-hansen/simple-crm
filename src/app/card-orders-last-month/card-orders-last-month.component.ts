import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DateCheckService } from '../services/date-check.service';

@Component({
  selector: 'app-card-orders-last-month',
  templateUrl: './card-orders-last-month.component.html',
  styleUrls: ['./card-orders-last-month.component.scss']
})
export class CardOrdersLastMonthComponent {
  orders: any = [];
  ordersLastMonth: any = [];
  ordersPreviousMonth: any = [];
  differenceToPrevMonth: string = "0";

  constructor(public dataservice: DataService, public dateCheckService:DateCheckService) {
  

    this.orders = this.dataservice.loadOrders().subscribe((orders) => {
      this.orders = orders;
      // console.log("orders are", this.orders);

      orders.forEach((orderData: any) => {
        let orderObj: any = {};
        orderObj['createDate'] = orderData['createDate'];
        orderObj['lastName'] = orderData['lastName'];
        if(this.dateCheckService.checkPreviousNMonth(orderData['createDate'], 1)) {
        this.ordersLastMonth.push(orderObj);
      } else if (this.dateCheckService.checkPreviousNMonth(orderData['createDate'], 2)) {
        this.ordersPreviousMonth.push(orderObj)
      }
      });

      console.log("ordersLastMonth", this.ordersLastMonth);
      console.log("ordersPreviousMonth", this.ordersPreviousMonth);
      
      
      this.differenceToPrevMonth = this.dateCheckService.calculateChangeRate(this.ordersLastMonth.length, this.ordersPreviousMonth.length);
    });

  }

}
