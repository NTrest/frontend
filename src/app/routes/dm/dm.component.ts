import { Component, OnInit } from '@angular/core';

import { DmService } from '../../services/dm.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.less']
})
export class DmComponent implements OnInit {

  user: string;

  constructor(private route: ActivatedRoute, private dmService: DmService) {
    console.log("TEST");
    this.route.params.subscribe(params => {
      this.user = params.user;
    });
  }

 messages(): Array<any> {
    return []; //return this.dmService.dms(this.user);
  }
  ngOnInit() {
  }

}
