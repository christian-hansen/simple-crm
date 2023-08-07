import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = ""
  loginWithEmailPassword: boolean = false;
  loading: boolean = false;
  
constructor(public authService: AuthService) {

}

login() {
  this.authService.signInWithEmail(this.email, this.password).then(user => {
    console.log(user);
    console.log("Display name", user?.displayName);
    console.log("Email", user?.email);
  }).catch(error => {
    console.error(error);
  });
}

loginWithEmailAndPassword(){
  this.loginWithEmailPassword = true;
}

resetForm() {
  this.loginWithEmailPassword = false;
}


loginWithGoogle(): void {
  this.authService.signInWithGoogle().then(user => {
    console.log(user);
    console.log("Display name", user?.displayName);
    console.log("Email", user?.email);
  }).catch(error => {
    console.error(error);
  });
}
}
