import { Component, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user-details',
  templateUrl: './dialog-edit-user-details.component.html',
  styleUrls: ['./dialog-edit-user-details.component.scss'],
})
export class DialogEditUserDetailsComponent {
  user: any;
  userId: any = '';
  // birthDate: Date
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);
  private userCollection: CollectionReference<DocumentData>;

  constructor(private dialog: MatDialogRef<DialogEditUserDetailsComponent>) {
    this.userCollection = collection(this.firestore, 'users');
  }

  async saveUser() {
    this.loading = true;
    const userDocRef = doc(this.userCollection, this.userId);
    let userJson = this.user.toJSON();
    await setDoc(userDocRef, userJson).then(() => {
      this.loading = false;
      this.dialog.close();
    });
  }
}
