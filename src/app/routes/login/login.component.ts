import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  model: any = {};

  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.login(this.model.username, this.model.password, (loggedIn) => {
      if (loggedIn === true) {
        this.router.navigateByUrl(this.returnUrl);
        return;
      }

      //TODO: ERROR MESSAGE
    });
  }

}
