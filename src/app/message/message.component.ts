import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MessageService } from 'app/message.service';
import { Router } from '@angular/router';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;
  constructor(private service: MessageService, private router: Router) {
    
  }

  ngOnInit() {
    this.messages = this.service.getMessages();
  }

  

}
