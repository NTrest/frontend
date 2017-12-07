import { Injectable } from '@angular/core';

import { SocketService } from './socket.service';

import { AuthService } from './auth.service';

@Injectable()
export class DmService {

    dmMap = new Map<string, any[]>();

    public dms(user: string) {
        let chats = this.dmMap.get(user);

        if (!chats) {
            this.dmMap.set(user, []);
            chats = this.dmMap.get(user);
        }

        return chats;
    }

    public users() {

        const _list = [];

        const keys = this.dmMap.keys();
        // tslint:disable-next-line:forin
        for (const key in keys) {
            _list.push(keys[key]);
        }

        return _list;
    }

    private otherUser(dm: any) {
        const myUser = this.authService.username;

        if (dm.to === myUser) {
            return dm.from;
        } else {
            return dm.to;
        }
    }

    private addDM(dm: any) {
        this.dms(this.otherUser(dm)).push(dm);
    }

    public sendDM(user: string, message: string) {
        this.socketService.emit('dm', {to: user, message: message});
        this.addDM(this.createDM(user, message));
    }

    getDms() {
        this.socketService.emit("getdms");
    }

constructor(private authService: AuthService, private socketService: SocketService) {
    socketService.on('recvdm').subscribe((dm) => {
        this.addDM(dm);
    });
    socketService.on('recvdms').subscribe((dms) => {
        // tslint:disable-next-line:forin
        for (const dm in dms) {
            this.addDM(dms[dm]);
        }
    });

    this.dms('test').push({from: 'demo1', to: 'test', message: 'TESTING 123'});
    this.dms('test').push({from: 'test', to: 'demo1', message: 'Hello World'});
    //this.addDM({to: 'demo1', from: 'test', message: 'TEST'});
 }


    private createDM(user: string, message: string) {
        return { to: user, message: message, from: this.authService.username, timestamp: new Date() };
    }
}
