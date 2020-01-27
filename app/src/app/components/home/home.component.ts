import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { UpdUsuarioRequest } from 'src/app/models/request/usuario.request';
import { UsuarioResponse } from 'src/app/models/response/usuario.response';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from 'src/app/shared/components/dialog/dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario : UsuarioResponse;

  constructor(
    private router: Router,
    private security: SecurityService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.usuario = this.security.getUsuario();

    if(!this.usuario.nombres){
      // this.openDialog();
    }
  }

  setNombres(){
    var request = new UpdUsuarioRequest();
    request.nombres = "";
    request.usuarioId = this.security.getUsuario().usuarioId;

    this.security.updUsuario(request).subscribe();
  }

  routeMenu(menuInt: number){
    switch (menuInt) {
      case 1:
        this.router.navigate([`evaluacion`]);
        break;
      case 2:
        this.router.navigate([`busqueda`]);
        break;
    
      default:
        break;
    }
  }

  animal: string;
  name: string;

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '150px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}

