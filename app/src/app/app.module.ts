import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DialogOverviewExampleDialog } from './shared/components/dialog/dialog-overview/dialog-overview.component';

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EvaluacionComponent,
    ListEvaluacionComponent,
    PointerSelectionComponent,
    LogoutComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    EvaluacionRestService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
