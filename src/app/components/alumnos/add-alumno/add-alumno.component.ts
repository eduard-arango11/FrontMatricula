import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  public miLista: any;

  alumno = {
    nombre: '',
    pin: '',
    dni: ''
  };
  submitted = false;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.retrieveAlumnos();
  }

  retrieveAlumnos() {
    this.alumnoService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveAlumno() {
    const data = {
      nombre: this.alumno.nombre,
      pin: this.alumno.pin,
      dni: this.alumno.dni
    };

    this.alumnoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.alumno.nombre = '';
          this.alumno.pin = '';
          this.alumno.dni = '';
          this.retrieveAlumnos();
        },
        error => {
          console.log(error);
        });
  }

}
