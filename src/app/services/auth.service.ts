import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';

import { User } from '../classes/user';

import { Subject } from 'rxjs/Subject';


class Response {
    status: number;
}


@Injectable()
export class AuthService {

loggedIn = true;

private loggedInSubject = new Subject<Boolean>();
private loggedInObservable = this.loggedInSubject.map((loggedIn) => loggedIn);

loginStatus() {
    return this.loggedInObservable;
}

isLoggedIn() {
    return this.loggedIn;
}

constructor(private http: HttpClient) { }

login(username: string, password: string, callback: any) {
    this.http.post<Response>('http://10.135.254.125:3000/api/login', {username, password}).subscribe(data => {
        if (data.status === 1) {
            this.loggedIn = true;
        }

        this.loggedInSubject.next(this.loggedIn);
        callback(this.loggedIn);
    });
}

logout() {
    this.http.get('http://10.135.254.125:3000/api/logout').subscribe(data => {
        this.loggedIn = false;
        this.loggedInSubject.next(this.loggedIn);
    });
}

register(user: User, callback: any) {
    this.http.post<Response>('http://10.135.254.125:3000/api/register', user).subscribe(data => {
        if (data.status === 100) {
            this.loggedIn = true;
        }

        callback(this.loggedIn);
        this.loggedInSubject.next(this.loggedIn);
    });
}


}
