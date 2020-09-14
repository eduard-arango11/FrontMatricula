import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula.service';
import { CursoService } from 'src/app/services/curso.service';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-matricula',
  templateUrl: './add-matricula.component.html',
  styleUrls: ['./add-matricula.component.css']
})
export class AddMatriculaComponent implements OnInit {

  public miLista: any;
  public cursos: any;
  public alumnos: any;

  matricula = {
    curso: '',
    alumno: ''
  };
  submitted = false;

  constructor(
    private matriculaService: MatriculaService,
    private cursoService: CursoService,  
    private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.retrieveMatriculas();
    this.retrieveCursos();
    this.retrieveAlumnos();
  }

  retrieveCursos() {
    this.cursoService.getAll()
      .subscribe(
        data => {
          this.cursos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveAlumnos() {
    this.alumnoService.getAll()
      .subscribe(
        data => {
          this.alumnos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveMatriculas() {
    this.matriculaService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveMatricula() {
    const data = {
      curso: this.matricula.curso,
      alumno: this.matricula.alumno
    };

    this.matriculaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.matricula.curso = '';
          this.matricula.alumno = '';
          this.retrieveMatriculas();
        },
        error => {
          console.log(error);
        });
  }

}
