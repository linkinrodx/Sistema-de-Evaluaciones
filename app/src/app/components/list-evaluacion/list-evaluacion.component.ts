import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-evaluacion',
  templateUrl: './list-evaluacion.component.html',
  styleUrls: ['./list-evaluacion.component.css']
})
export class ListEvaluacionComponent implements OnInit {

  listEvaluacion = [];
  columnas = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getListEvaluacion();
  }

  getListEvaluacion(){
    this.columnas = ['position', 'fechainicio', 'fechafin', 'modificar'];

    this.listEvaluacion = [{
      evaluacionId : 1,
      fechaCreacion: "20-01-2020",
      fechaModicacion: "-",
      modificar: true,
    },{
      evaluacionId : 2,
      fechaCreacion: "20-01-2020",
      fechaModicacion: "-",
      modificar: true,
    },{
      evaluacionId : 3,
      fechaCreacion: "21-01-2020",
      fechaModicacion: "-",
      modificar: false,
    },{
      evaluacionId : 4,
      fechaCreacion: "22-01-2020",
      fechaModicacion: "-",
      modificar: true,
    }];
  }
  
  regresar(){
    this.router.navigate(["home"]);
  }

  displayedColumns: string[] = ['position', 'fechainicio', 'fechafin', 'modificar'];

  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
}
