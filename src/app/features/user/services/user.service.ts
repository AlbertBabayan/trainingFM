import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { IUser } from "../../../infrastructure/interfaces";

@Injectable()
export class UserService {
  public users: IUser[] = [
    {id: 1, name: 'John', age: 20, job: {title: 'Developer', language: 'JavaScript'}},
    {id: 2, name: 'Jane', age: 24, job: {title: 'Developer', language: 'JavaScript'}},
    {id: 3, name: 'Bob', age: 30, job: {title: 'Developer', language: 'JavaScript'}},
    {id: 4, name: 'Kate', age: 35, job: {title: 'Developer', language: 'JavaScript'}},
    {id: 5, name: 'Sam', age: 40, job: {title: 'Developer', language: 'JavaScript'}},
  ]
  constructor() { }

  public getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  public getUser(id: number): Observable<IUser | undefined> {
    return of(this.users.find(user => user.id === id));
  }

  public addUser(user: IUser): Observable<IUser> {
    this.users.push(user);
    return of(user);
  }
}
