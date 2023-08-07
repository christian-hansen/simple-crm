// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider  } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private auth: Auth, private router:Router) {
    this.user$ = new Observable(subscriber => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        subscriber.next(user);
        if (user) {
          this._isLoggedIn.next(true);
        } else {
          this._isLoggedIn.next(false);
        }
      });
      return unsubscribe;
    });
  }

  async signInWithEmail(email: string, password: string): Promise<User | null> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    if (credential.user) {
      setTimeout(() => {
        this._isLoggedIn.next(true);
        this.router.navigate(['/dashboard']);
      }, 750);
    }
    return credential.user;
  }

  async signUpWithEmail(email: string, password: string): Promise<User | null> {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }

  async signOut(): Promise<void> {
    this._isLoggedIn.next(false);
    
    setTimeout(() => {
      console. clear() ;
      this.router.navigate(['']);
    }, 750);
    return signOut(this.auth);
  }

  async signInWithGoogle(): Promise<User | null> {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    if (credential.user) {
      setTimeout(() => {
        this._isLoggedIn.next(true);
        this.router.navigate(['/dashboard']);
      }, 750);
    }
    return credential.user;
  }
  
}
