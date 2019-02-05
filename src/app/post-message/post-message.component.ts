import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/message.service';
import { Message } from 'app/message.model';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {

  constructor(private service: MessageService) { }

  ngOnInit() {
  }
  postMessage(messageText: string){
    let newMsg = new Message(messageText);
    this.service.addMessage(newMsg);
   }
}
