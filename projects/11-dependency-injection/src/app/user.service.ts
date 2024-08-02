import { Injectable } from '@angular/core';
import { User } from './data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserData(): Promise<User[]> {
    //https://jsonplaceholder.typicode.com/users
    return new Promise((resolve) => {
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        response.json().then((data) => {
          resolve(data);
        });
      }
      );
    });
  }
}
