import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  @Input() listaCursos: any;

  displayedColumns: string[] = ['grupo', 'cupo','asignatura', 'periodo_academico', 'profesor', 'opciones'];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.retrieveCurso();
  }

  retrieveCurso() {
    this.cursoService.getAll()
      .subscribe(
        data => {
          this.listaCursos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeCurso(id) {
    this.cursoService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCurso();
        },
        error => {
          console.log(error);
        });
  }

}
