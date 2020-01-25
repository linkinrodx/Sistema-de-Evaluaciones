import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { ListEvaluacionComponent } from './components/list-evaluacion/list-evaluacion.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'busqueda', component: ListEvaluacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
