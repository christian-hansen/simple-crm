import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { Product } from 'src/models/products.class';

// TODO: Replace this with your own data model type
export interface TableProductsItem {
  productName: string;
  productIsActive: string;
  productPrice: number;
  orders: Array<any>;
}

// TODO: replace this with real data from your application
// const EXAMPLE_DATA: TableProductsItem[] = [
  // {productName: "Test1", productIsActive: true, productPrice: 834, orders:  ["abs", "isks"]},
  // {productName: "Test2", productIsActive: true, productPrice: 212, orders:  ["sdda", "dasda"]},
// ];

/**
 * Data source for the TableProducts view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableProductsDataSource extends DataSource<TableProductsItem> {
  private dataSubject: BehaviorSubject<TableProductsItem[]> = new BehaviorSubject<TableProductsItem[]>([]);
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private dataService: DataService) {
    super();
    
    this.loadData();

  }

  get data(): TableProductsItem[] {
    return this.dataSubject.value;
  }

  private loadData(): void {
    this.dataService.loadProducts().subscribe(products => {
      const items = products.map((product: Product) => ({
        productName: product.productName,
        productIsActive: this.getProductState(product.productIsActive),
        productPrice: (product.productPrice).toFixed(2),
        orders: product.orders,
      }));

      this.dataSubject.next(items);
    });
  }

  getProductState(productIsActive: boolean) {
if (productIsActive) {
  return "Active";
} else {
  return "Inactive"
}
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
   connect(): Observable<TableProductsItem[]> {
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
  private getPagedData(data: TableProductsItem[]): TableProductsItem[] {
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
  private getSortedData(data: TableProductsItem[]): TableProductsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'productName': return compare(a.productName, b.productName, isAsc);
        case 'productPrice': return compare(+a.productPrice, +b.productPrice, isAsc);
        case 'orders': return compare(a.orders.length, b.orders.length, isAsc);
        case 'productIsActive': return compare(a.productIsActive, b.productIsActive, isAsc);
        case 'revenue': return compare((a.orders.length * a.productPrice), (b.orders.length * b.productPrice), isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
