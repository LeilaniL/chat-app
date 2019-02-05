import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MessageService } from 'app/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
messages: FirebaseListObservable<any[]>;
  constructor(private service: MessageService) {
   }

  ngOnInit() {
    this.messages = this.service.getMessages();
  }


}
