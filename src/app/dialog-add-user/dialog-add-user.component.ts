import { Component, inject } from '@angular/core';
import { Firestore, collection, setDoc, doc} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
user: User = new User();
birthDate: Date = new Date();
firestore: Firestore = inject(Firestore);
loading: boolean = false;



constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  // const user = collection(this.firestore, 'items');
  //   this.item$ = collectionData(itemCollection);
}



async saveUser() {
  this.user.birthDate = this.birthDate.getTime();
  this.loading = true;
 
  const usersCollection = collection(this.firestore, 'users');
  const usersDocRef = doc(usersCollection);
  let usersJson = this.user.toJSON();
    
    await setDoc(usersDocRef, usersJson);

    this.loading = false;
    this.dialogRef.close();
}
}
