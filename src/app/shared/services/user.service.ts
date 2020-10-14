import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {RESTService} from '../modules/rest/services/rest.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../classes/User';
import {Credentials} from '../interfaces/Credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly user$: Observable<User>;
  private $userSubject: BehaviorSubject<User>;

  private LOGIN_API = 'console/auth/login';

  private LOCAL_STORAGE_USER_KEY = 'activeUser';

  constructor(private rest: RESTService
  ) {
    this.$userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_USER_KEY))
    );
    this.user$ =  this.$userSubject.asObservable();
  }
  getUserObservable(): Observable<User> {
    return this.user$;
  }
  commitChanges(usr: User) {
    localStorage.setItem(this.LOCAL_STORAGE_USER_KEY, JSON.stringify(usr));
    this.$userSubject.next(usr);
  }

  getUserValue(): User {
    if (this.$userSubject.getValue() === null || this.$userSubject.getValue() === undefined) {
      this.logout();
    }
    return Object.setPrototypeOf(this.$userSubject.getValue(), User);
  }
  getUserId(): string {
    return this.$userSubject.getValue().id;
  }
  isLoggedIn(): boolean {
    return !!this.getUserValue();
  }

  login(credenciales: Credentials) {
    return this.rest.post<User>(this.LOGIN_API, credenciales)
      .pipe(map((usr: User) => {
        if (usr.apiKey) {
          this.commitChanges(usr);
          return usr;
        }  else {
          // this.router.irLogin();
          // TODO manejar usuario o contraseña incorrecta
          return null;
        }

      }),  catchError((error: HttpErrorResponse) => {
        // TODO Manejar http error
        return throwError(error);
      }));
  }
  logout() {
    localStorage.removeItem(this.LOCAL_STORAGE_USER_KEY);
    this.$userSubject.next(null);
    // this.router.irLogin();
  }

}

