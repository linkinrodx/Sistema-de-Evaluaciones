import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-evaluacion',
  templateUrl: './list-evaluacion.component.html',
  styleUrls: ['./list-evaluacion.component.css']
})
export class ListEvaluacionComponent implements OnInit {

  listEvaluacion = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getListEvaluacion();
  }

  getListEvaluacion(){
    this.listEvaluacion = [{
      evaluacionId : 1,
      fechaCreacion: "20-01-2020",
    },{
      evaluacionId : 2,
      fechaCreacion: "20-01-2020",
    },{
      evaluacionId : 3,
      fechaCreacion: "21-01-2020",
    },{
      evaluacionId : 4,
      fechaCreacion: "22-01-2020",
    }];
  }
  
  regresar(){
    this.router.navigate(["home"]);
  }
}
