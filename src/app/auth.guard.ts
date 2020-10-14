

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
    // TODO Aqui se filtran que roles pueden acceder a que ruta de la app
    // En este caso, al tener un guard por modulo, solo nos enfocamos a describir que rol puede entrar al modulo
    // Ejemplo
    if (path.includes(AppRoutes.HOME)) {
      return rol !== UserType.NONE
    } else {
      return false;
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO recomiendo tener un auth guard por modulo
    return  this.rolCanActivate(state.url, this.currentUser.type);

  }
}
