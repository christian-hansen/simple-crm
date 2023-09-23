import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { TableUserDetailOrdersDataSource, TableUserDetailOrdersItem } from './table-user-detail-orders-datasource';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-user-detail-orders',
  templateUrl: './table-user-detail-orders.component.html',
  styleUrls: ['./table-user-detail-orders.component.scss']
})
export class TableUserDetailOrdersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableUserDetailOrdersItem>;
  dataSource: TableUserDetailOrdersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['createDate', 'productId', 'amount', 'productPrice', 'revenue'];

  constructor(private dataservice: DataService, private route: ActivatedRoute) {
    this.dataSource = new TableUserDetailOrdersDataSource(this.dataservice, this.route);
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
}
