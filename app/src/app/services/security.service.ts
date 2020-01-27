import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../models/response/usuario.response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityPaths } from './security.path';
import { GetUsuarioRequest, InsUsuarioRequest, UpdUsuarioRequest } from '../models/request/usuario.request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  evaluacionesAPI : string;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.evaluacionesAPI = environment.evaluacionesAPI;
  }

  getUsuario(){
    var user = new UsuarioResponse(JSON.parse(localStorage.getItem("user")));
    return user;
  }

  login(request : InsUsuarioRequest){    
    return this.http.post(`${this.evaluacionesAPI}${SecurityPaths.login}`, request)
      .pipe(map((response: any) => {
        if(response && response.code == 200 && response.result){
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(response.result))
          
          this.router.navigate(["home"]);
        }

        return response;
      }, )) as Observable<any>;
  }

  
  updUsuario(request : UpdUsuarioRequest){    
    return this.http.post(`${this.evaluacionesAPI}${SecurityPaths.updUsuario}`, request)
      .pipe(map((response: any) => {
        if(response && response.code == 200 && response.result){
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(response.result))
          
          this.router.navigate(["home"]);
        }

        return response;
      }, )) as Observable<any>;
  }

  logout(){
    localStorage.removeItem("user");

    this.router.navigate(["login"]);
  }
}
