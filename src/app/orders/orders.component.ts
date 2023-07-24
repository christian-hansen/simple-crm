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

  constructor(public dialog: MatDialog, private dataservice: DataService) {}

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }
}