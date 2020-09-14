import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.css']
})
export class AddProfesorComponent implements OnInit {

  public miLista: any;

  profesor = {
    nombre: '',
    cedula: ''
  };
  submitted = false;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit() {
    this.retrieveProfesores();
  }

  retrieveProfesores() {
    this.profesorService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveProfesor() {
    const data = {
      nombre: this.profesor.nombre,
      cedula: this.profesor.cedula
    };

    this.profesorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.profesor.nombre = '';
          this.profesor.cedula = '';
          this.retrieveProfesores();
        },
        error => {
          console.log(error);
        });
  }

}
