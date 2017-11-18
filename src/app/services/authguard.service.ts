import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService {

constructor(private authService: AuthService, state: RouterStateSnapshot, private router: Router) {
}

canActivate(route: ActivatedRoute, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
        return true;
    }

    this.router.navigate(['/login'] , { queryParams: { returnUrl: state.url }});
    return false;
}

}
