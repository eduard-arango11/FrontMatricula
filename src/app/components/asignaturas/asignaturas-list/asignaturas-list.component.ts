import { Component, OnInit, Input } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-asignaturas-list',
  templateUrl: './asignaturas-list.component.html',
  styleUrls: ['./asignaturas-list.component.scss']
})
export class AsignaturasListComponent implements OnInit {

  @Input() listaAsignaturas: any;

  displayedColumns: string[] = ['nombre', 'codigo', 'descripcion', 'opciones'];

  asignaturas: any;
  currentAsignatura = null;
  currentIndex = -1;
  nombre = '';

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit() {
    this.retrieveAsignaturas();
  }

  retrieveAsignaturas() {
    this.asignaturaService.getAll()
      .subscribe(
        data => {
          this.listaAsignaturas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveAsignaturas();
    this.currentAsignatura = null;
    this.currentIndex = -1;
  }

  setActiveAsignatura(asignatura, index) {
    this.currentAsignatura = asignatura;
    this.currentIndex = index;
  }

  removeAllAsignaturas() {
    this.asignaturaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAsignaturas();
        },
        error => {
          console.log(error);
        });
  }

  removeAsignatura(id) {
    this.asignaturaService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAsignaturas();
        },
        error => {
          console.log(error);
        });
  }

  searchNombre() {
    this.asignaturaService.findByName(this.nombre)
      .subscribe(
        data => {
          this.asignaturas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}