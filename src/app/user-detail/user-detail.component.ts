import { Component, inject } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { doc, collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserDetailsComponent } from '../dialog-edit-user-details/dialog-edit-user-details.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  userId: any = '';
  firestore: Firestore = inject(Firestore);
  private userCollection: CollectionReference<DocumentData>;
  user: User = new User();
  users$: Observable<any>;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {

    this.userCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(this.userCollection, { idField: 'customIdName' });

    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');

      this.getUser();
    });
  }

  getUser() {
    const usersDocRef = doc(this.userCollection, this.userId);
    docData(usersDocRef).subscribe((user: any) => {
this.user = new User(user);

console.log("Retrieved user", this.user);

    })
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserDetailsComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
