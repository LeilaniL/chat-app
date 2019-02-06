import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user;
private isLoggedIn: Boolean;
private userName: string;

  constructor(public authService: AuthenticationService) {this.authService.user.subscribe(user => {
    if (user == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userName = user.displayName;
    }
 })
}
  ngOnInit() {
  }

  login() {
    this.authService.login();
    console.log(this.user.displayName);
  }

  logout() {
    this.authService.logout();
  }
}
