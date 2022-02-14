import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public user$ : BehaviorSubject<string[]>= new BehaviorSubject([]);

  constructor() { }

  addUser(user : string) : void {
    this.user$.value.push(user);
  }
}
