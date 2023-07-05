import { Component, inject, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  firestore: Firestore = inject(Firestore);
  // users$: Observable<any[]>;
  private userCollection: CollectionReference<DocumentData>;
  allUsers: any = [];
  users$: Observable<any>;
  users: any = [];

constructor(public dialog: MatDialog) {
  this.userCollection = collection(this.firestore, 'users');
  this.users$ = collectionData(this.userCollection);
  
this.loadUsers();

 

}

ngOnInit(): void {
  //

  
}


loadUsers() {
  
  this.users$.subscribe((newUsers) => {
    console.log('Users$ are:', newUsers);

    this.users = newUsers;
  });

  console.log("Users are:", this.users);
  
}

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
