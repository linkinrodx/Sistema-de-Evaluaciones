import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetListEvaluacionRequest } from 'src/app/models/request/evaluacion.request';
import { EvaluacionRestService } from 'src/app/services/evaluacion-rest.service';
import { EvaluacionResponse } from 'src/app/models/response/evaluacion.response';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-list-evaluacion',
  templateUrl: './list-evaluacion.component.html',
  styleUrls: ['./list-evaluacion.component.css']
})
export class ListEvaluacionComponent implements OnInit {

  listEvaluacion = [];
  columnas = [];
  
  listEvaluacionnew = [];
  columnasnew = [];

  constructor(
    private router: Router,
    private evaluacionService: EvaluacionRestService
  ) { }

  ngOnInit() {
    this.getListEvaluacionNew();
  }
  
  regresar(){
    this.router.navigate(["home"]);
  }
  

  getListEvaluacionNew(){
    this.columnas = ['position', 'fechainicio', 'fechafin', 'modificar'];

    var request = new GetListEvaluacionRequest();
    request.fechaInicio = this.fechaInicio;
    request.fechaFin = this.fechaFin;

    this.columnasnew = ['evaluacionId'];

    this.evaluacionService.getListEvaluacion(request).subscribe(response => {
      this.listEvaluacion = [];
      response.result.forEach(eva => {
        var neweva = new EvaluacionResponse();
        neweva.evaluacionId = eva.evaluacionId;
        neweva.usuarioId = eva.usuarioId;
        neweva.comentario = eva.comentario;
        neweva.calificacion = eva.calificacion;
        neweva.fechaCreacion = eva.fechaCreacion;
        neweva.fechaModificacion = eva.fechaModificacion;
        neweva.modificar = true;

        this.listEvaluacion.push(neweva);
      });
    });
  }
  
  modificar(evaluacionId){
    this.router.navigate(["evaluacion", { Id: evaluacionId}]);
  }

  public fechaInicio : Date;
  public fechaFin : Date;

  addEventFechaInicio(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaInicio = new Date(`${event.value}`);
  }
  
  addEventFechaFin(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaFin = new Date(`${event.value}`);
  }
}
