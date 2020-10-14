import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


import {ENDPOINT} from '../../../../../environments/environment';
import {UserService} from '../../../services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO adaptar a conveniencia
    const user = this.userService.getUserValue();
    // Verificamos si el usuario ha iniciado sesiòn
    const isLoggedIn = user && user.apiKey;
    // Verificamos que la url a la que desea llamar sea nuestra y que no sea la del login
    const isApiUrl = request.url.startsWith(ENDPOINT) && !request.url.includes('login');
    if (isLoggedIn && isApiUrl) {
      // Agregamos el jwt a todas las peticiones que se hagan al servidor cuando el usuario haya iniciado sesion
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.apiKey}`
        }
      });
    }

    return next.handle(request);
  }
}
