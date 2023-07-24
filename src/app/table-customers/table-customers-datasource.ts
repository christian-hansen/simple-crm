import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { User } from 'src/models/user.class';

// TODO: Replace this with your own data model type
export interface TableCustomersItem {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
  country: string;
  createDate: number;
  customIdName: string;
}

export class TableCustomersDataSource extends DataSource<TableCustomersItem> {
  private dataSubject: BehaviorSubject<TableCustomersItem[]> = new BehaviorSubject<TableCustomersItem[]>([]);
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  private originalData: TableCustomersItem[] = []; // Add this line



  constructor(private dataservice: DataService) {
    super();
    
    this.loadData();
  }

  get data(): TableCustomersItem[] {
    return this.dataSubject.value;
  }

  private loadData(): void {
    this.dataservice.loadUsers().subscribe(users => {
      
      const items = users.map((user: any) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthDate: user.birthDate,
        street: user.street,
        zipCode: user.zipCode,
        city: user.city,
        country: user.country,
        createDate: user.createDate,
        customIdName: user.customIdName,
      }));

      this.dataSubject.next(items);
      this.originalData = [...items];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSubject.next(
        this.originalData.filter((item: TableCustomersItem) => {
            // Combine the values of the properties you want to include in the filter
            const concatenatedValues = 
                item.firstName + ' ' +
                item.lastName + ' ' +
                item.email + ' ' +
                item.birthDate + ' ' +
                item.country + ' ' ;
            
            // Convert them to lower case and check if they include the filter value
            return concatenatedValues.toLowerCase().includes(filterValue.toLowerCase());
        })
    );
}

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
   connect(): Observable<TableCustomersItem[]> {
    if (this.paginator && this.sort) {
      return merge(this.dataSubject, this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.dataSubject.value]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
   disconnect(): void {
    this.dataSubject.complete();
  }


  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableCustomersItem[]): TableCustomersItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableCustomersItem[]): TableCustomersItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'birthDate': return compare(+a.birthDate, +b.birthDate, isAsc);
        case 'country': return compare(a.birthDate, b.birthDate, isAsc);
        case 'createDate': return compare(a.createDate, b.createDate, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
