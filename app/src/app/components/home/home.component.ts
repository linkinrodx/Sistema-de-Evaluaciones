import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private security: SecurityService
    ) { }

  ngOnInit() {
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
}
