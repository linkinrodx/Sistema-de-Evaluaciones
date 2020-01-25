import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private router: Router
  ) { }

  getUsuario(){
    var user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  logout(){
    localStorage.removeItem("user");

    this.router.navigate(["login"]);
  }
}
