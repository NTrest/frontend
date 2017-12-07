import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.less']
})
export class DmComponent implements OnInit {

  user: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user = params.user;
    });
  }

  ngOnInit() {
  }

}
