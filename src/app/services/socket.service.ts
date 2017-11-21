import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import * as io from 'socket.io-client';

import {environment} from '../../environments/environment';


@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket;
    private _connected$ = new Subject<boolean>();
    connected$ = this._connected$.asObservable();

    constructor() {
        console.log(localStorage.getItem('token'));
        this.socket = io.connect(environment.server, {reconnection: true, query: `token=${localStorage.getItem('token')}`});
        this.socket.on('connect', () => {
            this._connected$.next(true);
            console.log('connected!!!');
        });
        this.socket.on('disconnect', () => this._connected$.next(false));
    }

    conenct() {
        this.socket = io.connect(environment.server, {reconnection: true, query: `token=${localStorage.getItem('token')}`});
        this.socket.connect();
    }

    disconnect() {
        this.socket.disconnect();
    }

    on(event: string): Observable<any> {
        return new Observable<any>(observer => {


            this.socket.on(event, data => {
                observer.next(data);
            });

            return () => this.socket.off(event);
        });
    }

    emit(event: string, data?: any) {
        console.log(data);
        this.socket.emit(event, data);
    }
}
