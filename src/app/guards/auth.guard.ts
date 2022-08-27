import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take, lastValueFrom } from 'rxjs';
import { selectStore } from '../store/selectors/store.selector';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private store: Store) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const store = await lastValueFrom(this.store.pipe(select(selectStore), take(1)));
        if (store?.isLoggedIn) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}