import { Component, inject, OnInit } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { countries } from 'src/models/country-data-store';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user-details',
  templateUrl: './dialog-edit-user-details.component.html',
  styleUrls: ['./dialog-edit-user-details.component.scss'],
})
export class DialogEditUserDetailsComponent implements OnInit {
  user: any;
  userId: any = '';
  birthDate: Date = new Date();
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);
  private userCollection: CollectionReference<DocumentData>;
  public countries:any = countries;

  constructor(private dialog: MatDialogRef<DialogEditUserDetailsComponent>) {
    this.userCollection = collection(this.firestore, 'users');
  }
  
  ngOnInit() {
    this.birthDate = new Date(this.user.birthDate);
}

  async saveUser() {
    if(this.birthDate instanceof Date) {
      this.user.birthDate = this.birthDate.getTime();
  }

    this.loading = true;
    const userDocRef = doc(this.userCollection, this.userId);
    let userJson = this.user.toJSON();
    await setDoc(userDocRef, userJson).then(() => {
      this.loading = false;
      this.dialog.close();
    });
  }

  onDateChange(event: any) {
    this.birthDate = new Date(event);
  }
}
