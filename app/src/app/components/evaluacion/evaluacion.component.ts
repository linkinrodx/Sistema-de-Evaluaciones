import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { EvaluacionRestService } from 'src/app/services/evaluacion-rest.service';
import { GetEvaluacionRequest, InsEvaluacionRequest, UpdEvaluacionRequest } from 'src/app/models/request/evaluacion.request';
import { UsuarioResponse } from 'src/app/models/response/usuario.response';

import { ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  calificacion: number = 0;

  usuario: UsuarioResponse;
  evaluacionId: number;

  constructor(
    private security: SecurityService,
    private router: Router,
    private evaluacionService: EvaluacionRestService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.usuario = this.security.getUsuario();

    this.activatedRoute.params.subscribe(params => {
      this.evaluacionId = params['Id'];
    });

    if (this.evaluacionId && this.evaluacionId != 0){
      this.getEvaluacion(this.evaluacionId);
    }
  }

  regresar(){
    this.router.navigate(["home"]);
  }

  valid(){
    var msg = "";
    if(this.calificacion == 0){
      msg = "No ha calificado el servicio.";
    }
    
    return msg;
  }

  getEvaluacion(evaluacionId){
    var request = new GetEvaluacionRequest();
    request.evaluacionId = evaluacionId;

    this.evaluacionService.getEvaluacion(request).subscribe(response => {
      this.calificacion = response.result.calificacion;
    });
  }

  setEvaluacion(){
    if (this.evaluacionId && this.evaluacionId != 0){
      this.updEvaluacion();
    }
    else{
      this.insEvaluacion();
    }
  }
  
  insEvaluacion(){
    var msg = this.valid();
    if(msg != "") {
      this.openSnackBar(msg, "Ok");
      return;
    }

    var request = new InsEvaluacionRequest();
    request.usuarioId = this.usuario.usuarioId;
    request.comentario = "pruebas";
    request.calificacion = this.calificacion;

    this.evaluacionService.insEvaluacion(request).subscribe(response => {
      this.openSnackBar("Se ha guardado correctamente.", "Ok");
      this.regresar();
    }, error =>{
      this.openSnackBar("Ha ocurrido un problema.", "Ok");
    });
  }
  
  updEvaluacion(){
    var msg = this.valid();
    if(msg != "") {
      this.openSnackBar(msg, "Ok");
      return;
    }

    var request = new UpdEvaluacionRequest();
    request.evaluacionId = this.evaluacionId;
    request.usuarioId = this.usuario.usuarioId;
    request.comentario = "pruebas upd";
    request.calificacion = this.calificacion;

    this.evaluacionService.updEvaluacion(request).subscribe(response => {      
      this.openSnackBar("Se ha actualizado correctamente.", "Ok");
      this.regresar();
    }, error =>{
      this.openSnackBar("Ha ocurrido un problema.", "Ok");
    });
  }

  getPoints(evt){
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
