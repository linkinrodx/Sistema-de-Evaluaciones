import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  user;

  constructor(
    private security: SecurityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.security.getUsuario();
  }

  regresar(){
    this.router.navigate(["home"]);
  }
}
