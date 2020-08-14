import {UserType} from "../enums/UserType";

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
