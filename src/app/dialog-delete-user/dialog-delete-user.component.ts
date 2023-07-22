import { Component, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { collection, deleteDoc, doc } from 'firebase/firestore';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss'],
})
export class DialogDeleteUserComponent {
  user: any;
  userId: any = '';
  firestore: Firestore = inject(Firestore);
  loading: boolean = false;
  private userCollection: CollectionReference<DocumentData>;

  constructor(public dialog: MatDialogRef<DialogDeleteUserComponent>, private router:Router) {
    this.userCollection = collection(this.firestore, 'users');
    
  }

  async deleteUser() {
    console.log("delete user", this.userId);
    this.loading = true;

    const userDocRef = doc(this.userCollection, this.userId);
    await deleteDoc(userDocRef).then(() => {
      this.loading = false;
      this.dialog.close();
    });
    this.router.navigate(['/user']);
  }
  
}
