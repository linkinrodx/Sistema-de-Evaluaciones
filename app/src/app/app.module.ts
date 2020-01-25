import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { ListEvaluacionComponent } from './components/list-evaluacion/list-evaluacion.component';
import { EvaluacionRestService } from './services/evaluacion-rest.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PointerSelectionComponent } from './shared/components/pointer-selection/pointer-selection.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EvaluacionComponent,
    ListEvaluacionComponent,
    PointerSelectionComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule    
  ],
  providers: [EvaluacionRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
