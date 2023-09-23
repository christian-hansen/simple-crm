import { Component } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-revenue-total',
  templateUrl: './card-revenue-total.component.html',
  styleUrls: ['./card-revenue-total.component.scss']
})
export class CardRevenueTotalComponent {
  allorders: any = [];
  orders: any = [];
  products: any = [];
  allProducts: any = [];
  totalOrders: any = 0;
  totalRevenue: any = 0;

  constructor(public dataservice: DataService) {
    // this.loadProducts();
    this.loadAllData();
    this.calculateTotalRevenue();    
  }

  async loadAllData() {
   this.loadAllProducts().pipe(
      switchMap(() => this.loadOrders())
    ).subscribe(() => {
      this.calculateTotalRevenue();
    });
    }
  
  loadAllProducts() {
    return this.dataservice.loadProducts().pipe(
      tap((products) => {
        this.products = products;
  
        products.forEach((productData: any) => {
          let productObj: any = {};
          productObj['id'] = productData['customIdName'];
          productObj['price'] = productData['productPrice'];
          this.allProducts.push(productObj);
        });
      })
    );
  }
  
  loadOrders() {
    return this.dataservice.loadOrders().pipe(
      tap((orders) => {
        this.orders = orders;
        this.totalOrders = orders.length;
  
        orders.forEach((orderData: any) => {
          let orderObj: any = {};
          orderObj['id'] = orderData['customIdName'];
          orderObj['revenue'] = (+orderData.amount * (+this.getProductPrice(orderData['productId']))).toFixed(0);
        
          this.allorders.push(orderObj['revenue']);
        });
      }) 
    ); 
  }


  
  getProductPrice(orderProductId: string) {
    let pos = this.allProducts.findIndex((el:any) => el.id === orderProductId);
  
    if(pos !== -1) {
      return this.allProducts[pos].price;
    }
    else {
      return null;
    }
  }

  calculateTotalRevenue() {
    for (let i = 0; i < this.allorders.length; i++) {
      const element = +this.allorders[i];
      this.totalRevenue += element;
    } 
  }
}