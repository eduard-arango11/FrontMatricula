import { Component, OnInit, Input } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matriculas-list',
  templateUrl: './matriculas-list.component.html',
  styleUrls: ['./matriculas-list.component.css']
})
export class MatriculasListComponent implements OnInit {

  @Input() listaMatriculas: any;

  displayedColumns: string[] = ['alumno', 'curso', 'calificacion', 'opciones'];

  constructor(private matriculaService: MatriculaService) { }

  ngOnInit() {
    this.retrieveMatricula();
  }

  retrieveMatricula() {
    this.matriculaService.getAll()
      .subscribe(
        data => {
          this.listaMatriculas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeMatricula(id) {
    this.matriculaService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMatricula();
        },
        error => {
          console.log(error);
        });
  }

}
