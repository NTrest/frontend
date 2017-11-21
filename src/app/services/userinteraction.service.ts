import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserinteractionService {
private username$: string;
private errorSubject = new Subject<string>();
private openSubject = new Subject<string>();

constructor(private http: HttpClient) { }

errorStream(): Observable<string> {
    return this.errorSubject.asObservable();
}

openSubjectStream() {
    return this.openSubject.asObservable();
}

openUserIneraction(username?: string) {
    this.openSubject.next(username || this.username$);
    if (typeof(username) !== 'undefined') {
        this.username$ = username;
    }
}

getUsername() {
    return this.username$;
}

setUsername(username: string) {
    this.username$ = username;
}

sendFriendRequest() {
    this.http.post<any>('/api/sendfriendrequest', {username: this.username$}).subscribe((data) => {
        if (!data.success) {
            this.errorSubject.next('ERROR: Could not add friend');
        }
    });
}

}
