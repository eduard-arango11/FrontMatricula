import { Component, OnInit, Input } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-profesores-list',
  templateUrl: './profesores-list.component.html',
  styleUrls: ['./profesores-list.component.css']
})
export class ProfesoresListComponent implements OnInit {

  @Input() listaProfesores: any;

  displayedColumns: string[] = ['nombre', 'cedula', 'opciones'];

  constructor(private profesorService: ProfesorService) { }

  ngOnInit() {
    this.retrieveProfesor();
  }

  retrieveProfesor() {
    this.profesorService.getAll()
      .subscribe(
        data => {
          this.listaProfesores = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeProfesor(id) {
    this.profesorService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProfesor();
        },
        error => {
          console.log(error);
        });
  }

}
