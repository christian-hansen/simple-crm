import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { arrayUnion, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Order } from 'src/models/order.class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent {
  order: Order = new Order();
  customerId: string = "";
  productId: string = "";
year2020: number = 1577833200000;
minDate: Date = new Date(this.year2020); //TODO potentially change to earliest product release date
maxDate: Date = new Date();
  createDate: Date = new Date();
  firestore: Firestore = inject(Firestore);
  loading: boolean = false;
  allUsers: any = [];
  allProducts: any = [];
  
  
  constructor(public dialogRef: MatDialogRef<DialogAddOrderComponent>, private dataservice: DataService) {
    this.loadAllProducts();
    this.loadAllUsers();
  }
  
  loadAllUsers() {
    this.dataservice.loadUsers().subscribe((users) => {
      this.allUsers = users;
    });
  }

  loadAllProducts() {
    this.dataservice.loadProducts().subscribe((products) => {
      this.allProducts = products;
    });
  }
  
  async saveOrder() {
    this.order.createDate = this.createDate.getTime();
    this.order.productId = this.productId;
    this.order.customerId = this.customerId;
    this.loading = true;
   
    const ordersCollection = collection(this.firestore, 'orders');
    const ordersDocRef = doc(ordersCollection);
    let orderToJson = this.order.toJSON();
      
      await setDoc(ordersDocRef, orderToJson);
      ;
      

//Save to users's order array
      const usersCollection = collection(this.firestore, 'users');
      const usersDocRef = doc(usersCollection, this.customerId);
      await updateDoc(usersDocRef, {
orders: arrayUnion(ordersDocRef.id)
      })

      //Save to product's order array
      const productsCollection = collection(this.firestore, 'products');
      const productsDocRef = doc(productsCollection, this.productId);
      await updateDoc(productsDocRef, {
orders: arrayUnion(ordersDocRef.id)
      })

      this.loading = false;
      this.dialogRef.close();
  }

  onDateChange(event: any) {
    this.createDate = new Date(event);
  }
  
  }
  