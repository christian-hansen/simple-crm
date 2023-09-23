import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { TableOrdersDataSource, TableOrdersItem } from './table-orders-datasource';
import { DataService } from 'src/app/services/data.service';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableOrdersItem>;
  dataSource: TableOrdersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['createDate', 'customerId', 'productId', 'amount', 'productPrice', 'revenue'];

  constructor(private dataService: DataService, public dialog: MatDialog) {
    this.dataSource = new TableOrdersDataSource(this.dataService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    const sortState: Sort = {active: 'createDate', direction: 'desc'};
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
