import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  allOrders: any = [];
  allUsers: any = [];
  allProducts: any = [];

  constructor(public dialog: MatDialog, private dataservice: DataService) {
    this.loadAllOrders();
    this.loadAllProducts();
    this.loadAllUsers();
  }

  loadAllOrders() {
    this.dataservice.loadOrders().subscribe((orders) => {
      this.allOrders = orders;
      console.log("Retrieved orders", this.allOrders);
      
    });
  }

  loadAllUsers() {
    this.dataservice.loadUsers().subscribe((users) => {
      this.allUsers = users;
      console.log("Retrieved users", this.allUsers)
    });
  }

  loadAllProducts() {
    this.dataservice.loadProducts().subscribe((products) => {
      this.allProducts = products;
      console.log("Retrieved products", this.allProducts)
    });
  }

  getUserById(customIdName: string) {
    return this.allUsers.find((user: any) => user.customIdName === customIdName);
  }
  
  getProductById(customIdName: string) {
    return this.allProducts.find((product: any) => product.customIdName === customIdName);
  }
  openDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }
}
