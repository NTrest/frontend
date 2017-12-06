import { LocationService } from './services/location.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService, private locationService: LocationService, private socketService: SocketService) {
    

    locationService.positionError().subscribe((err) => {
      console.error(err);
    });

    socketService.connected$.subscribe((connected) => {
      console.log("CONNECTED? " + connected);
    });


    authService.loginStatus().subscribe((loggedIn) => {
      if (loggedIn) {
        socketService.disconnect();
        locationService.start();
        socketService.conenct();
        console.log("Just logged in");
      } else {
        locationService.stop();
        socketService.disconnect();
      }
    });

    if (authService.isLoggedIn()) {
      console.log('loggedin');
      socketService.disconnect();
      locationService.start();
      socketService.conenct();
    }


  }
}
