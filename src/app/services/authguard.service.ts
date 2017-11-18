import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthguardService implements CanActivate {

constructor(private authService: AuthService, private router: Router) {
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
        return true;
    }


    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
}

}
