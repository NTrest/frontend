import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { User } from '../classes/user';

import { Subject } from 'rxjs/Subject';

import {JwtHelper} from 'angular2-jwt';


class Response {
    success: Boolean;
}


@Injectable()
export class AuthService {


jwtHelper = new JwtHelper();

private loggedInSubject = new Subject<Boolean>();
private username: string = "";

loginStatus() {
    return this.loggedInSubject.asObservable();
}

isLoggedIn() {
    const token = localStorage.getItem('token');
    return (token !== 'undefined')  && token != null && !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
}

constructor(private http: HttpClient) { }

login(username: string, password: string, callback: any) {

    this.http.post<any>('/api/login', {username, password}).subscribe(data => {
        console.log(data);
        if (data.success) {
            localStorage.setItem('token', data.token);
            this.loggedInSubject.next(true);
            callback(true);

            console.log("LOGGED IN");
            return;
        }


        callback(false);
    });
}

logout() {
    this.http.get('/api/logout').subscribe(data => {
        localStorage.removeItem('token');
        this.loggedInSubject.next(false);
    });
}

register(user: User, callback: any) {
    this.http.post<any>('/api/register', user).subscribe(data => {
        console.log(data);
        if (data.success) {
            localStorage.setItem('token', data.token);
            this.loggedInSubject.next(true);
            callback(true);
            return;
        }

        callback(false);
        this.loggedInSubject.next(false);
    });
}


}
