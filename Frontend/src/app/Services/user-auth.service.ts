import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): any[] {
    const rolesString = localStorage.getItem("roles");
    if (rolesString !== null) {
      return JSON.parse(rolesString);
    } else {
      return [];
    }
  }
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken(){
    return localStorage.getItem('jwtToken')
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }

}
