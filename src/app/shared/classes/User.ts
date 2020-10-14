import {UserType} from '../enums/UserType';

export abstract class User {
  public apiKey: string;
  public id: string;
  public password: string;
  public type: UserType;
  public email: string;


}

