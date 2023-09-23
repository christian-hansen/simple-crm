import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentUser?: any;
  subscription: Subscription = new Subscription();

  constructor(public authService: AuthService) {}

  ngOnInit() {

      this.subscription.add(
        this.authService.user$.subscribe(
          user => this.currentUser = user
        )
      );

      console.log(this.currentUser);
  }
}
