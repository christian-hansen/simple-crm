import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { TableCustomersDataSource, TableCustomersItem } from './table-customers-datasource';
import { DataService } from '../services/data.service';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, fromEvent, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.scss']
})
export class TableCustomersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCustomersItem>;
  @ViewChild('search') input!: ElementRef;
  dataSource: TableCustomersDataSource;
  filterSubscription: Subscription = new Subscription;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'email', 'birthDate', 'country', 'createDate'];

  constructor(private dataservice: DataService) {
    this.dataSource = new TableCustomersDataSource(this.dataservice);

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

    const sortState: Sort = {active: 'createDate', direction: 'desc'}
    this.sort.active = sortState.active;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);

    this.filterSubscription = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => event.target.value),
        // if character length greater then 2
        filter(res => res.length > 2),
        // Time in milliseconds between key events
        debounceTime(1000), 
        // If previous query is diffent from current   
        distinctUntilChanged()
        // subscription for response
      ).subscribe((text: string) => {
        this.dataSource.applyFilter(text);
      });
  }
  
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
