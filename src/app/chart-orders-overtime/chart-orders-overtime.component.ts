import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartTimeperiodService } from '../services/chart-timeperiod.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chart-orders-overtime',
  templateUrl: './chart-orders-overtime.component.html',
  styleUrls: ['./chart-orders-overtime.component.scss']
})
export class ChartOrdersOvertimeComponent implements OnInit{
public chart2: any;
last12Months:Array<[]> = [];
months: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
labels: any = []
today = new Date();
ordersP1PerMonth: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ordersP2PerMonth: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
p1: string = "pWmN8IZfwtk952KzYCtk";
p2: string = "CxQR8sw6cUl5uwxC8OVC";

constructor(private timeperiodservice: ChartTimeperiodService, private dataservice: DataService) {
this.timeperiodservice.loadLast12Months(this.today, this.months, this.last12Months);
}

countOrdersPerMonth(orders: any) {
  orders.forEach((orderdata: any) => {
    if (orderdata.productId === this.p1) {
      let orderDate = new Date(orderdata.createDate);  
      let orderCreationMonth = this.timeperiodservice.getMonthFromArr(orderDate, this.months, 0);
      let indexInMonths = this.last12Months.indexOf(orderCreationMonth);
      this.ordersP1PerMonth[indexInMonths] += 1;
    } 
    else if (orderdata.productId === this.p2) {
      let orderDate = new Date(orderdata.createDate);  
      let orderCreationMonth = this.timeperiodservice.getMonthFromArr(orderDate, this.months, 0);
      let indexInMonths = this.last12Months.indexOf(orderCreationMonth);
      this.ordersP2PerMonth[indexInMonths] += 1;}
    
});
}

async ngOnInit() {
  await this.loadData();
  this.timeperiodservice.setLabels(this.today, this.months, this.labels);
}

async loadData() {
  this.dataservice.loadOrders().subscribe((orders => {
    this.countOrdersPerMonth(orders);
    this.createChart();
  }));
}

createChart() {
  
  this.chart2 = new Chart("orders-over-time", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: this.labels, 
       datasets: [
        {
          label: "Product 1",
          data: this.ordersP1PerMonth,
          backgroundColor: 'blue'
        },
        {
          label: "Product 2",
          data: this.ordersP2PerMonth,
          backgroundColor: 'limegreen'
        }  
      ]
    },
    options: {
      aspectRatio:1,
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    }
    
  });
}
}