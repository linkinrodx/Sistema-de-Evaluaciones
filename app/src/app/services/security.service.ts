import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../models/response/usuario.response';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private router: Router
  ) { }

  getUsuario(){
    var user = new UsuarioResponse(JSON.parse(localStorage.getItem("user")));
    return user;
  }

  logout(){
    localStorage.removeItem("user");

    this.router.navigate(["login"]);
  }
}
