import { Component, OnInit } from '@angular/core';
import { PeriodoService } from 'src/app/services/periodo.service';

@Component({
  selector: 'app-add-periodo',
  templateUrl: './add-periodo.component.html',
  styleUrls: ['./add-periodo.component.css']
})
export class AddPeriodoComponent implements OnInit {

  public miLista: any;

  periodo = {
    nombre: '',
    fecha_inicio: '',
    fecha_fin: ''
  };
  submitted = false;

  constructor(private periodoService: PeriodoService) { }

  ngOnInit() {
    this.retrievePeriodos();
  }

  retrievePeriodos() {
    this.periodoService.getAll()
      .subscribe(
        data => {
          this.miLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  savePeriodo() {
    const data = {
      nombre: this.periodo.nombre,
      fecha_inicio: this.periodo.fecha_inicio,
      fecha_fin: this.periodo.fecha_fin
    };

    this.periodoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.periodo.nombre = '';
          this.periodo.fecha_inicio = '';
          this.periodo.fecha_fin = '';
          this.retrievePeriodos();
        },
        error => {
          console.log(error);
        });
  }

}
