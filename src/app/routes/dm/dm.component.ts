import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';

import { DmService } from '../../services/dm.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.less']
})
export class DmComponent implements OnInit, AfterViewChecked {

  message = '';
  user: string;

  @ViewChild('scrollMe') scroller: ElementRef;

  scrollToBottom() {
    try {
      this.scroller.nativeElement.scrollTop = this.scroller.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  constructor(private route: ActivatedRoute, private dmService: DmService) {
    this.route.params.subscribe(params => {
      this.user = params.user;
    });
  }

 get messages(): Array<any> {
    return this.dmService.dms(this.user);
  }
  ngOnInit() {
    this.dmService.getDms();
  }

  sendmsg() {
    this.dmService.sendDM(this.user, this.message);
  }
}
