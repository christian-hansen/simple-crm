import { inject, Injectable } from '@angular/core';
import {
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  firestore: Firestore = inject(Firestore);

  private userCollection: CollectionReference<DocumentData>;
  users$: Observable<any>;

  private productCollection: CollectionReference<DocumentData>;
  products$: Observable<any>;

  private orderCollection: CollectionReference<DocumentData>;
  orders$: Observable<any>;

  constructor() {
    this.userCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(this.userCollection, { idField: 'customIdName'});
    this.productCollection = collection(this.firestore, 'products');
    this.products$ = collectionData(this.productCollection, { idField: 'customIdName' });

    this.orderCollection = collection(this.firestore, 'orders');
    this.orders$ = collectionData(this.orderCollection, { idField: 'customIdName' });
  }

  loadProducts() {
    return this.products$;
  }

  loadUsers() {
    return this.users$;
  }

  loadOrders() {
    return this.orders$;
  }
}
