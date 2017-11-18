import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';


class LoginResponse {
    status: number;
}


@Injectable()
export class AuthService {

loggedIn = true;

isLoggedIn() {
    return this.loggedIn;
}

constructor(private http: HttpClient) { }

login(username: string, password: string, callback: any) {
    this.http.post<LoginResponse>('/api/login', {username, password}).subscribe(data => {
        if (data.status === 100) {
            this.loggedIn = true;
        }

        callback(this.loggedIn);
    });
}

logout() {
    this.http.get('/api/logout').subscribe(data => {
        this.loggedIn = false;
    });
}

}
