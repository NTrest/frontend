import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  model: any = {};

  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this.authService.logout();
    this.authService.login(this.model.username, this.model.password, (loggedIn) => {
      if (loggedIn === true) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      }
    });
  }

}
