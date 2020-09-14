import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material & flex imports
import {
  MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatCardModule, 
  MatInputModule, 
  MatSelectModule, 
  MatTableModule, 
  MatExpansionModule, 
  MatCheckboxModule, 
  MatDividerModule, 
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { AddAsignaturaComponent } from './components/asignaturas/add-asignatura/add-asignatura.component';
import { AsignaturaDetailsComponent } from './components/asignaturas/asignatura-details/asignatura-details.component';
import { AsignaturasListComponent } from './components/asignaturas/asignaturas-list/asignaturas-list.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { AddAlumnoComponent } from './components/alumnos/add-alumno/add-alumno.component';
import { ProfesoresListComponent } from './components/profesores/profesores-list/profesores-list.component';
import { AddProfesorComponent } from './components/profesores/add-profesor/add-profesor.component';
import { PeriodosListComponent } from './components/periodos/periodos-list/periodos-list.component';
import { AddPeriodoComponent } from './components/periodos/add-periodo/add-periodo.component';
import { AddCursoComponent } from './components/cursos/add-curso/add-curso.component';
import { AddMatriculaComponent } from './components/matriculas/add-matricula/add-matricula.component';
import { CursosListComponent } from './components/cursos/cursos-list/cursos-list.component';
import { MatriculasListComponent } from './components/matriculas/matriculas-list/matriculas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddAsignaturaComponent,
    AsignaturaDetailsComponent,
    AsignaturasListComponent,
    AlumnosListComponent,
    AddAlumnoComponent,
    ProfesoresListComponent,
    AddProfesorComponent,
    PeriodosListComponent,
    AddPeriodoComponent,
    AddCursoComponent,
    AddMatriculaComponent,
    CursosListComponent,
    MatriculasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
