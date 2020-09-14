import { Component, OnInit, Input } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  @Input() listaAlumnos: any;

  displayedColumns: string[] = ['nombre', 'pin','dni', 'opciones'];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.retrieveAlumno();
  }

  retrieveAlumno() {
    this.alumnoService.getAll()
      .subscribe(
        data => {
          this.listaAlumnos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeAlumno(id) {
    this.alumnoService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAlumno();
        },
        error => {
          console.log(error);
        });
  }

}
