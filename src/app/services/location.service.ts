import { HttpClient } from '@angular/common/http';
import { Location } from '../classes/location';
import { AuthService } from './auth.service';
import { SocketService } from './socket.service';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';


@Injectable()
export class LocationService {
    private pushSubscription: Subscription;
    private errorSubject = new Subject<PositionError>();
    private pos$: any = {};
    private watchId: any;
    private firstSend = true;
constructor(private http: HttpClient, private authService: AuthService, private socketService: SocketService) { }

toRadians (angle) {
  return angle * (Math.PI / 180);
}


/*

distance(lat, lng, lat0, lng0):
    deglen := 110.25
    x := lat - lat0
    y := (lng - lng0)*cos(lat0)
    return deglen*sqrt(x*x + y*y)
*/


// Preforms cos clientside;
sendLocation(coords: Coordinates) {
    const location: any = {latcos: Math.cos(this.toRadians(coords.latitude)), lat: coords.latitude, lon: coords.longitude};

    /*this.http.post<any>('http://10.132.3.163:3000/api/location', location).subscribe((data) => {
        if (data.status === 2) {
            this.authService.logout();
            return;
        }

        if (<number>data.status !== 1) {
            console.error('UNKNOWN ERROR');
            return;
        }
    });*/

    this.socketService.emit('locationUpdate', location);
    console.log("Location sent");
}

positionError() {
    return this.errorSubject.asObservable()
    .map(positionError => positionError.message);
}

start() {
    this.watchId = navigator.geolocation.watchPosition((pos) => {
        this.pos$ = pos;
        if (this.firstSend) {
            this.sendLocation(this.pos$.coords);
            this.firstSend = false;
        }
    }, (posError) => this.errorSubject.next(posError));
    this.pushSubscription = Observable.interval(1000 * 60 * 1.1).subscribe(() => {
        if (!!this.pos$.coords) {
            this.sendLocation(this.pos$.coords);
        }
    });
}

stop() {
    if (typeof(this.pushSubscription) === 'undefined') {
        return;
    }

    this.pushSubscription.unsubscribe();
    navigator.geolocation.clearWatch(this.watchId);
}

}
