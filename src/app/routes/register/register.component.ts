import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  register() {
    this.authService.register(this.model, (registered) => {
      if (!registered) {
        // SHOW ERROR!!!!
        return;
      }

      this.router.navigate(['/feedpublic']);

    });
  }

}
