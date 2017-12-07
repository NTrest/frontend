import { Component, OnInit } from '@angular/core';

import { Message } from '../../classes/message';

import {NgForm} from '@angular/forms';

import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-feedpublic',
  templateUrl: './feedpublic.component.html',
  styleUrls: ['./feedpublic.component.less']
})
export class FeedpublicComponent implements OnInit {
  model: any = {};
  feed: Message[] = [];


  constructor(private socketService: SocketService) {
    socketService.on('public').subscribe(data => {
      this.feed.push(data);
    });

    socketService.on('locationError').subscribe(data => {
      console.log("location error");
    });

    socketService.connected$.subscribe((connected) => {
      if (connected) {
        socketService.once('locationAccept').then(() => {
          console.log('locationAccept');
            this.feed.length = 0;
            socketService.emit('getMsgs');
        });
      }
    });
  }

  ngOnInit() {
    this.feed.length = 0;
    this.socketService.emit('getMsgs');
  }

  sendmsg(): void {
    //this.feed.push({username: 'USER', message: this.model.status});
    this.socketService.emit('send', {mode: 0, message: this.model.status});
  }

}
