import {throwError} from "rxjs";
import {UserType} from "../enums/UserType";
import {UserInterface} from "../interfaces/UserInterface";

export abstract class User implements UserInterface{
  private apiKey: string;
  private id: string;
  private password: string;
  private type: UserType;
  private email: string;


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
    return this.email;
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
    this.email = username;
  }

  getType(): UserType {
    throwError('Operación no implementada');
    return undefined;
  }


}

