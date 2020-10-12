

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {RouterService} from './shared/modules/routing/services/router.service';
import {User} from "./shared/classes/User";
import {UserService} from "./shared/services/user.service";
import {AppRoutes} from "./shared/modules/routing/enums/AppRoutes";
import {RESTService} from "./shared/modules/rest/services/rest.service";
import {UserType} from "./shared/enums/UserType";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: User;


  constructor(private userService: UserService,
              private rest: RESTService,
              private router: RouterService) {
    this.userService.getUserObservable().subscribe((usuario: User) => {
      this.currentUser = usuario;
    });
  }
  private rolCanActivate(path: string, rol: UserType): boolean {
    // TODO Here goes access matrix

    if (path.includes(AppRoutes.HOME)) {
      return rol !== UserType.NONE
    } else {
      return false;
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUser && this.currentUser.apiKey) {
      if (state.url.includes(AppRoutes.LOGIN) ||
        state.url.includes(AppRoutes.REESTABLECER_CONTRASENA)) {
        this.router.irBienvenida();
        return false;
      } else {
        if (
          this.currentUser.type === UserType.NONE &&
          state.url.includes(AppRoutes.SELECCION_PERFIL) === false
        ) {
          this.router.irSeleccionarPerfil();
          return false;
        } else {
          return  this.rolCanActivate(state.url, this.currentUser.type);
        }
      }
    } else {
      if (state.url.includes(AppRoutes.LOGIN) ||
        state.url.includes(AppRoutes.REESTABLECER_CONTRASENA)) {
        return true;
      } else {
        this.router.irLogin();
        return false;
      }

    }
  }
}
