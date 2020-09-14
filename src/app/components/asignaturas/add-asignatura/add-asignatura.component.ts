import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-add-asignatura',
  templateUrl: './add-asignatura.component.html',
  styleUrls: ['./add-asignatura.component.scss']
})
export class AddAsignaturaComponent implements OnInit {

  public miLista: any;

  asignatura = {
    nombre: '',
    descripcion: '',
    codigo: ''
  };
  submitted = false;

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit() {
    this.retrieveAsignaturas();
  }

  retrieveAsignaturas() {
    this.asignaturaService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveAsignatura() {
    const data = {
      nombre: this.asignatura.nombre,
      descripcion: this.asignatura.descripcion,
      codigo: this.asignatura.codigo
    };

    this.asignaturaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.asignatura.nombre = '';
          this.asignatura.descripcion = '';
          this.asignatura.codigo = '';
          this.retrieveAsignaturas();
        },
        error => {
          console.log(error);
        });
  }

}
