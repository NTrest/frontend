import { HttpClient } from '@angular/common/http';
import { Location } from '../classes/location';
import { AuthService } from './auth.service';
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
    private errorObservable: Observable<String> = this.errorSubject.asObservable()
        .map(positionError => positionError.message);
constructor(private http: HttpClient, private authService: AuthService) { }

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
    const location: Location = {latcos: Math.cos(this.toRadians(coords.latitude)), coords};

    this.http.post<any>('/api/location', location).subscribe((data) => {
        if (data.status === 2) {
            this.authService.logout();
            return;
        }

        if (<number>data.status !== 1) {
            console.error('UNKNOWN ERROR');
            return;
        }
    });
}

positionError() {
    return this.errorObservable;
}

start() {
    this.pushSubscription = Observable.interval(30 * 60 * 1000).subscribe(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.sendLocation(pos.coords);
        }, (posError) => {
            this.errorSubject.next(posError);
        });
    });
}

stop() {
    this.pushSubscription.unsubscribe();
}

}
