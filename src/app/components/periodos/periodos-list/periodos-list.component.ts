import { Component, OnInit, Input } from '@angular/core';
import { PeriodoService } from 'src/app/services/periodo.service';

@Component({
  selector: 'app-periodos-list',
  templateUrl: './periodos-list.component.html',
  styleUrls: ['./periodos-list.component.css']
})
export class PeriodosListComponent implements OnInit {

  @Input() listaPeriodos: any;

  displayedColumns: string[] = ['nombre', 'fecha_inicio','fecha_fin', 'opciones'];

  constructor(private periodoService: PeriodoService) { }

  ngOnInit() {
    this.retrievePeriodo();
  }

  retrievePeriodo() {
    this.periodoService.getAll()
      .subscribe(
        data => {
          this.listaPeriodos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removePeriodo(id) {
    this.periodoService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrievePeriodo();
        },
        error => {
          console.log(error);
        });
  }

}
