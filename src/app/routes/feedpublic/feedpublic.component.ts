import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../classes/feedItem';

@Component({
  selector: 'app-feedpublic',
  templateUrl: './feedpublic.component.html',
  styleUrls: ['./feedpublic.component.less']
})
export class FeedpublicComponent implements OnInit {

  feed: FeedItem[];


  constructor() { }

  ngOnInit() {
  }

}
