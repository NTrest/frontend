import { HttpClient } from '@angular/common/http';
import { Location } from '../classes/location';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

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
sendLocation(location: Location) {
    location.latcos = Math.cos(this.toRadians(location.lat));

    this.http.post('/api/location', location).subscribe((data) => {
        
    });
}

}
