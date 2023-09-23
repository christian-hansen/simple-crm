import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  allProducts: any = [];

  constructor(public dialog: MatDialog, private dataservice: DataService) {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.dataservice.loadProducts().subscribe((products) => {
      this.allProducts = products;
    });
  }

}
