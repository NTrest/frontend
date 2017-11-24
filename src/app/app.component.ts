import { LocationService } from './services/location.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService, private locationService: LocationService, private socketService: SocketService) {
    
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
