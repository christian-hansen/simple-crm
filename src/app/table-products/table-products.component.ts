import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { TableProductsDataSource, TableProductsItem } from './table-products-datasource';
import { DataService } from '../services/data.service';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss']
})
export class TableProductsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableProductsItem>;
  dataSource: TableProductsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['productName', 'productPrice', 'orders', 'revenue'];

  constructor(private dataservice: DataService, public dialog: MatDialog) {
    this.dataSource = new TableProductsDataSource(this.dataservice);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

    const sortState: Sort = {active: 'productName', direction: 'asc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);

    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }

}
