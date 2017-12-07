import { Component, OnInit } from '@angular/core';

import { DmService } from '../../services/dm.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dmlist',
  templateUrl: './dmlist.component.html',
  styleUrls: ['./dmlist.component.less']
})
export class DmlistComponent implements OnInit {

  constructor(private dmService: DmService, private router: Router) {
    this.dmService.getDms();
   }

  ngOnInit() {

  }


  get users(): Array<string> {
    return this.dmService.users();
  }

  navigate(user: string) {
    this.router.navigate(['/dm', user]);
  }

}
