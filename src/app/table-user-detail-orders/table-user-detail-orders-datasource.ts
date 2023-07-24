import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

// TODO: Replace this with your own data model type
export interface TableUserDetailOrdersItem {
  amount: number;
  revenue: number;
  createDate: number;
  customerId: string;
  orderId: string;
  productId: string;
  productPrice: number;
}

// TODO: replace this with real data from your application

/**
 * Data source for the TableUserDetailOrders view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableUserDetailOrdersDataSource extends DataSource<TableUserDetailOrdersItem> {
  private dataSubject: BehaviorSubject<TableUserDetailOrdersItem[]> = new BehaviorSubject<TableUserDetailOrdersItem[]>([]);
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  allUsers: any = [];
  allProducts: any = [];
  userId: string | null = null;

  constructor(private dataservice: DataService, private route: ActivatedRoute) {
    super();

    this.route.params.subscribe(params => {
      this.userId = params['id']; // replace 'id' with the actual parameter name in your routing configuration
      this.loadAllProducts();
      this.loadAllUsers();
      this.loadData();
    });

    // this.loadAllProducts();
    // this.loadAllUsers();
    // this.loadData();

  }

  get data(): TableUserDetailOrdersItem[] {
    return this.dataSubject.value;
  }

  private loadData(): void {
    this.dataservice.loadOrders().subscribe(orders => {
      const items = orders
      .filter((order: any) => order.customerId === this.userId)
      .map((order: any) => ({
        amount: order.amount,
        orderId: order.orderId,
        revenue: (order.amount * this.getProductPriceById(order.productId)).toFixed(2),
        createDate: order.createDate,
        customerId: order.customerId,
        productId: this.getProductNameById(order.productId),
        productPrice: this.getProductPriceById(order.productId)
      }));
console.log(items);
this.dataSubject.next(items);
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

getCustomerNamesEmailById(customIdName: string) {
  const customer = this.allUsers.find((customer: any) => customer.customIdName === customIdName);

  if (customer) {
    let customerName = customer.firstName + " " + customer.lastName + " (" + customer.email + ")";
    return customerName;
  } else {
    return null;
  }
}

getCustomerDetailsById(customIdName: string, detail: string) {
  const customer = this.allUsers.find((customer: any) => customer.customIdName === customIdName);
  const customerDetail = detail;

  if (customer && customerDetail === "firstName") {
    let firstName = customer.firstName;
    return firstName;
  } else if (customer && customerDetail === "lastName") {
    let lastName = customer.lastName;
    return lastName;
  } else if (customer && customerDetail === "email") {
    let email = customer.email;
    return email;
    }
  else {
    return null;
  }
}

getProductNameById(customIdName: string) {
  const product = this.allProducts.find((product: any) => product.customIdName === customIdName);

  if (product) {
    let productName = product.productName;
    return productName
    ;
  } else {
    return null;
  }
}

getProductPriceById(customIdName: string) {
  const product = this.allProducts.find((product: any) => product.customIdName === customIdName);

  if (product) {
    let productPrice = product.productPrice;
    return productPrice
    ;
  } else {
    return null;
  }
}


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableUserDetailOrdersItem[]> {
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
  private getPagedData(data: TableUserDetailOrdersItem[]): TableUserDetailOrdersItem[] {
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
  private getSortedData(data: TableUserDetailOrdersItem[]): TableUserDetailOrdersItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'createDate': return compare(a.createDate, b.createDate, isAsc);
        case 'productId': return compare(a.productId, b.productId, isAsc);
        case 'amount': return compare(+a.amount, +b.amount, isAsc);
        case 'productPrice': return compare(+a.productPrice, +b.productPrice, isAsc);
        case 'revenue': return compare(+a.revenue, +b.revenue, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
