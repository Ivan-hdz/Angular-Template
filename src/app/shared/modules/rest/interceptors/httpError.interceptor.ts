import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 ||
        err.status === 500 ||
        err.statusText.toLowerCase().includes('unknown')) {
        // TODO decidir que hacer cuando el servidor nos devuelve un error 500 o 401
        //
      } else {
        // TODO Manejar otros errores
        const error = err.error.message || err.statusText;
        return throwError(error);
      }
    }));
  }
}
