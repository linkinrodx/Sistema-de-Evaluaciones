import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    var rgx = new RegExp("/\S+@\S+\.\S+/");
    var email = "correo@email.com";

    if(rgx.test(email)) return;

    var user = {
      nombres : "Rodrigo Saraya Salas",
      correo : email
    }

    localStorage.setItem("user", JSON.stringify(user));

    this.router.navigate(["home"]);
  }
}
