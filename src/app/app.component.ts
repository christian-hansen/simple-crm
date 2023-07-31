import { ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogExplanationComponent } from './dialog-explanation/dialog-explanation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  isLoggedIn: boolean = false;
  subscription: Subscription = new Subscription();
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

// 
  constructor(public authService: AuthService, private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, private dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscription = this.authService.isLoggedIn$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
      
      );
      console.log(this.isLoggedIn);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openHelp() {
    this.dialog.open(DialogExplanationComponent)
  }
}
