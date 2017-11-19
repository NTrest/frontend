import { LocationService } from './services/location.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService, private locationService: LocationService) {
    authService.loginStatus().subscribe((loggedIn) => {
      if (loggedIn) {
        locationService.start();
      } else {
        locationService.stop();
      }

    });
  }
}
