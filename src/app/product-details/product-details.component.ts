import { Component, inject } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection, CollectionReference, doc, DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/models/products.class';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId: any = '';
  firestore: Firestore = inject(Firestore);
  private productsCollection: CollectionReference<DocumentData>;
  product: Product = new Product();
  products$: Observable<any>;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {

    this.productsCollection = collection(this.firestore, 'products');
    this.products$ = collectionData(this.productsCollection, { idField: 'customIdName' });

    this.route.paramMap.subscribe((paramMap) => {
      this.productId = paramMap.get('id');

      this.getProduct();
    });
  }

  getProduct() {
    const usersDocRef = doc(this.productsCollection, this.productId);
    docData(usersDocRef).subscribe((product: any) => {
this.product = new Product(product);
console.log("Retrieved produict", this.product);

    })
  }

}
