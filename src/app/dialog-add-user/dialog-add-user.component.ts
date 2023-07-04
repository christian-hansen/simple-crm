import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, doc, docData, DocumentReference } from '@angular/fire/firestore';
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

constructor() {
  // const user = collection(this.firestore, 'items');
  //   this.item$ = collectionData(itemCollection);
}



async saveUser() {
  this.user.birthDate = this.birthDate.getTime();
  console.log("user", this.user);
  
  // this.firestore.collection('users').add(this.user).then((result: any) {
  //   console.log("Adding user finished", result);  })
    

    const usersCollection = collection(this.firestore, 'users');
    const usersDocRef = doc(usersCollection);
    let usersJson = this.user.toJSON();
    await setDoc(usersDocRef, usersJson);

}
}
