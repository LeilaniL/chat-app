import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: string;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
    setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight)}, 2500);
  }

  logout() {
    this.authService.logout();
  }
}
