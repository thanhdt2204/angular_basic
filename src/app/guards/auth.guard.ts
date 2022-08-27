import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Constants } from '../utils/constant';
import { StoreService } from '../services/store.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private storeService: StoreService) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const store = await this.storeService.currentStore.toPromise().then(store => { return store });
        // if (store?.isLoggedIn) {
        //     return true;
        // }

        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
    }
}