import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAsignaturaComponent } from './components/asignaturas/add-asignatura/add-asignatura.component';
import { AddAlumnoComponent } from './components/alumnos/add-alumno/add-alumno.component';
import { AddProfesorComponent } from './components/profesores/add-profesor/add-profesor.component';
import { AddPeriodoComponent } from './components/periodos/add-periodo/add-periodo.component';
import { AddCursoComponent } from './components/cursos/add-curso/add-curso.component';
import { AddMatriculaComponent } from './components/matriculas/add-matricula/add-matricula.component';

const routes: Routes = [
  { path: '', redirectTo: 'asignaturas', pathMatch: 'full' },
  { path: 'asignaturas', component: AddAsignaturaComponent },
  { path: 'alumnos', component: AddAlumnoComponent },
  { path: 'profesores', component: AddProfesorComponent },
  { path: 'periodos', component: AddPeriodoComponent },
  { path: 'cursos', component: AddCursoComponent },
  { path: 'matriculas', component: AddMatriculaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
