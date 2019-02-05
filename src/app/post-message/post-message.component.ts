import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/message.service';
import { Message } from 'app/message.model';
import { AuthenticationService } from 'app/authentication.service';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {

  userName;
  userPic;

  constructor(private service: MessageService, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      this.userName = user.displayName
      this.userPic = user.photoURL;

    })
  }

  ngOnInit() {
  }
  postMessage(messageText: string) {
    let newMsg = new Message(messageText, this.userName, this.userPic);
    this.service.addMessage(newMsg);
  }
  
}




