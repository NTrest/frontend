import { Component, OnInit } from '@angular/core';

import { DmService } from '../../services/dm.service';

@Component({
  selector: 'app-dmlist',
  templateUrl: './dmlist.component.html',
  styleUrls: ['./dmlist.component.less']
})
export class DmlistComponent implements OnInit {

  constructor(private dmService: DmService) { }

  ngOnInit() {
  }


  get users(): Array<string> {
    return this.dmService.users();
  }

}
