import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-orders-total',
  templateUrl: './card-orders-total.component.html',
  styleUrls: ['./card-orders-total.component.scss']
})
export class CardOrdersTotalComponent {
  allorders: any = [];
  orders: any = [];
  totalOrders: any = 0;

  constructor(public dataservice: DataService) {
    this.orders = this.dataservice.loadOrders().subscribe((orders) => {
      this.orders = orders;


      this.totalOrders = orders.length;

      orders.forEach((orderData: any) => {
        let orderObj: any = {};
        orderObj['id'] = orderData['customIdName'];
        this.allorders.push(orderObj);
      });

    });
  }
}
