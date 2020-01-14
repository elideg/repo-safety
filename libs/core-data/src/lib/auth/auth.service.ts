import { Injectable } from '@angular/core';

export const TOKEN_NAME = 'auth:onehungrymind';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.setToken(this.getToken());
  }

  // TOKEN
  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
}
