

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {RouterService} from './shared/modules/routing/services/router.service';
import {User} from "./shared/classes/User";
import {UserService} from "./shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: User;

  constructor(
    private router: RouterService,
    private usrService: UserService
  ) {
    this.usrService.getUserObservable().subscribe((user: User) => {
      this.currentUser = user;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state.url)
    if (this.currentUser) {
      if (state.url.includes('/console/auth') ) {
        this.router.irNotificationHistory();
        return false;
      } else {
        return true;
      }
    } else {
      if (state.url.includes('/console/auth') ) {
        return true;
      } else {
        // this.router.irLogin();
        return false;
      }
    }
  }
}
