import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { InsUsuarioRequest } from 'src/app/models/request/usuario.request';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo : string;

  constructor(
    private router: Router,
    private security: SecurityService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  validateEmail(email) {
    var textvalid = "";
    if (email){
      textvalid = email;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(textvalid).toLowerCase());
  }

  login(){
    if(!this.validateEmail(this.correo)) {      
      this.openSnackBar("Escriba su correo correctamente.", "Ok");
      return;
    }

    var user = new InsUsuarioRequest();
    user.correo = this.correo;

    this.security.login(user).subscribe();
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
