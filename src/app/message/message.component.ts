import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MessageService } from 'app/message.service';
import { AuthenticationService } from 'app/authentication.service';
import { Router } from '@angular/router';
import { Message } from 'app/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: string;
  
  messages: FirebaseListObservable<any[]>;

  constructor(private authService: AuthenticationService, private service: MessageService, private router: Router) {
    this.authService.user.subscribe(user => {
        if (user == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
          this.userName = user.displayName;
        }
      
    });
  }
  checkWhoSent(msgSender: Message){
    if(this.userName!=msgSender.userName){
      return 'darker-msg';
    }
    else {
      return "lighter-msg";
    }
  }
  ngOnInit() {
    this.messages = this.service.getMessages();
  }
}
