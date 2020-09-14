import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { PeriodoService } from 'src/app/services/periodo.service';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  public miLista: any;
  public periodos: any;
  public asignaturas: any;
  public profesores: any;

  curso = {
    grupo: '',
    cupo: '',
    periodo_academico: '',
    asignatura: '',
    profesor: ''
  };
  submitted = false;

  constructor(
    private cursoService: CursoService, 
    private periodoService: PeriodoService, 
    private asignaturaService: AsignaturaService, 
    private profesorService: ProfesorService) { }

  ngOnInit() {
    this.retrieveCursos();
    this.retrievePeriodos();
    this.retrieveAsignaturas();
    this.retrieveProfesores();
  }

  retrievePeriodos() {
    this.periodoService.getAll()
      .subscribe(
        data => {
          this.periodos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  retrieveAsignaturas() {
    this.asignaturaService.getAll()
      .subscribe(
        data => {
          this.asignaturas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveProfesores() {
    this.profesorService.getAll()
      .subscribe(
        data => {
          this.profesores = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveCursos() {
    this.cursoService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveCurso() {
    const data = {
      grupo: this.curso.grupo,
      cupo: this.curso.cupo,
      periodo_academico: this.curso.periodo_academico,
      asignatura: this.curso.asignatura,
      profesor: this.curso.profesor
    };

    this.cursoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.curso.grupo = '';
          this.curso.cupo = '';
          this.curso.periodo_academico = '';
          this.curso.asignatura = '';
          this.curso.profesor = '';
          this.retrieveCursos();
        },
        error => {
          console.log(error);
        });
  }

}
