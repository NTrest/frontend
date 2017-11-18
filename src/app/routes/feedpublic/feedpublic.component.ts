import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../classes/feedItem';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-feedpublic',
  templateUrl: './feedpublic.component.html',
  styleUrls: ['./feedpublic.component.less']
})
export class FeedpublicComponent implements OnInit {
  model: any = {};
  feed: FeedItem[] = [];


  constructor() { }

  ngOnInit() {
  }

  sendmsg(): void {
    this.feed.push({username: "USER", message: this.model.status});
  }

}
