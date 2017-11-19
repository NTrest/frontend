import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.register(this.model, (registered) => {
      if (!registered) {
        // SHOW ERROR!!!!
        return;
      }

    });
  }

}
