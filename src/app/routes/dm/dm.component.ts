import { Component, OnInit } from '@angular/core';

import { DmService } from '../../services/dm.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.less']
})
export class DmComponent implements OnInit {

  model: any = {};
  user: string;

  constructor(private route: ActivatedRoute, private dmService: DmService) {
    console.log("TEST");
    this.route.params.subscribe(params => {
      this.user = params.user;
    });
  }

 get messages(): Array<any> {
    return this.dmService.dms(this.user);
  }
  ngOnInit() {
  }

  sendmsg() {
    this.dmService.sendDM('test', 'fucking hell!!!');
  }
}
