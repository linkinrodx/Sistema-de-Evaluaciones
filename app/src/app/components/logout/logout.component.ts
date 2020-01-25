import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  usuario;
  nombreUsuario: string;

  constructor(
    private security: SecurityService
  ) {
   }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(){
    this.usuario = this.security.getUsuario();

    if(this.usuario){
      this.nombreUsuario = this.usuario.nombres;
    }
  }

  salir(){
    this.security.logout();
  }
}
