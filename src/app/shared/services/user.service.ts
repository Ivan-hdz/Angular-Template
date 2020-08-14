import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../modules/routing/services/router.service";
import {catchError, map} from "rxjs/operators";
import {RESTService} from "../modules/rest/services/rest.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../modules/angular-common/components/modal/modal.component";
import {AlertMessages} from "../classes/AlertMessages";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly user$: Observable<User>;
  private $userSubject: BehaviorSubject<User>;

  private  USER_COLLECTION = 'user';
  private USER_CHANGE_PASSWORD_ENDPOINT = 'user/change_password';
  private SEND_RECOVERY_EMAIL_ENDPOINT = 'user/restore_request';

  private LOCAL_STORAGE_USER_KEY = 'activeUser';

  constructor(private rest: RESTService,
              private modal: MatDialog,
              private router: RouterService
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
      this.cerrarSesion();
    }
    return this.$userSubject.getValue();
  }
  getUserId(): string {
    return this.$userSubject.getValue().getId();
  }
  isLoggedIn(): boolean {
    if (this.getUserValue()) {
      return this.getUserValue().getApiKey() != null;
    } else {
      return false;
    }
  }
  changeUserType(userType: UserType) {
    const u = this.getUserValue();
    u.setType(userType);
    this.commitChanges(u);
  }

  login(credenciales: Credentials) {
    const USER_LOGIN_ENDPOINT = 'user/login'
    return this.rest.post<User>(USER_LOGIN_ENDPOINT, credenciales)
      .pipe(map((usr: User) => {
        if (usr && usr.getApiKey()) {
          // TODO Preprocess the UserInterface object and commit it
          this.commitChanges(usr);
        }
        if (this.isLoggedIn()) {
          switch (this.getUserValue().getType()) {
            // TODO DEFINE WHAT TO DO FOR EACH USER TYPE
            case UserType.TYPE_ONE:
              break;
            case UserType.TYPE_TOW:
              break;
          }
        } else {
          // this.router.irLogin();
          this.modal.open(ModalComponent, {
            data: AlertMessages.ERROR_MESSAGE('Usuario o contraseña incorrectas')
          });
        }
        return usr;
      }),  catchError((error: HttpErrorResponse) => {
        this.modal.open(ModalComponent, {
          data: AlertMessages.ERROR_MESSAGE('No se pudo iniciar sesión, favor de intentarlo más tarde.')
        });
        return throwError(error);
      }));
  }
  cerrarSesion() {
    localStorage.removeItem(this.LOCAL_STORAGE_USER_KEY);
    this.$userSubject.next(null);
    // this.router.irLogin();
  }
  create(user: User): Observable<User> {

    return this.rest.post<User>(this.USER_COLLECTION, user)
  }
  getAll(): Observable<User[]> {

    return this.rest.getAll<User>(this.USER_COLLECTION);
  }
  getByType(rol: string): Observable<User[]> {
    const find_by = {
      roles: rol
    };
    const order_by = {
      nombre_completo: 1
    };
    return this.rest.getBy<User>(this.USER_COLLECTION,find_by, order_by);
  }
  get(id: string): Observable<User> {
    return this.rest.getOne<User>(this.USER_COLLECTION, id);
  }
  changeUserPassword(_old: string, _new: string, _id: string) {

    return this.rest.post<boolean>(this.USER_CHANGE_PASSWORD_ENDPOINT,
      {
        _old, _new, _id
      });
  }
  deleteUser(id: string) {
    return this.rest.delete(this.USER_COLLECTION, id);
  }
  updateUser( user: User, id: string): Observable<User> {
    return this.rest.update<User>(this.USER_COLLECTION, id, user);
  }

  sendPasswordRecoveryEmail(email: string): Observable<boolean> {
    return this.rest.post<boolean>(this.SEND_RECOVERY_EMAIL_ENDPOINT, {
      email
    });
    // return of(true);
  }
}
export interface UserInterface {
  getId(): string;
  getUsername(): string;
  getPassword(): string;
  getType(): UserType;
  getApiKey(): string;
  setId(id: string): void;
  setUsername(username: string): void;
  setPassword(password: string): void;
  setType(type: UserType): void;
  setApiKey(apiKey: string): void;
}
export abstract class User implements UserInterface{
  private apiKey: string;
  private id: string;
  private password: string;
  private type: UserType;
  private username: string;

  getApiKey(): string {
    return this.apiKey;
  }

  getId(): string {
    return this.id;
  }

  getPassword(): string {
    return this.password;
  }


  getUsername(): string {
    return this.username;
  }

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey
  }

  setId(id: string): void {
    this.id = id;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setType(type: UserType): void {
    this.type = type;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getType(): UserType {
    throwError('Operación no implementada');
    return undefined;
  }


}
export interface Credentials {
  username: string;
  password: string;
}
export enum UserType {
  // TODO DEFINE USER TYPES
  TYPE_ONE,
  TYPE_TOW
}
