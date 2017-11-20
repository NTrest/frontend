import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import * as io from 'socket.io-client';


@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket;
    private _connected$ = new Subject<boolean>();
    connected$ = this._connected$.asObservable();

    constructor() {
        this.socket = io.connect('http://127.0.0.1:3000', {reconnection: true});
        this.socket.on('connect', () => {
            this._connected$.next(true);
            console.log('connected!!!');
        });
        this.socket.on('disconnect', () => this._connected$.next(false));
    }

    conenct() {
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