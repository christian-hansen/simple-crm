import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  isLoggedIn: boolean = false;
  subscription: Subscription = new Subscription();

// 
  constructor(public authService: AuthService) {
   
  }

  ngOnInit() {
    this.subscription = this.authService.isLoggedIn$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
      
      );
      console.log(this.isLoggedIn);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
