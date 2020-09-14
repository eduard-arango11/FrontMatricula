import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.css']
})
export class AsignaturaDetailsComponent implements OnInit {

  currentAsignatura = null;
  message = '';

  constructor(
    private asignaturaService: AsignaturaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getAsignatura(this.route.snapshot.paramMap.get('id'));
  }

  getAsignatura(id) {
    this.asignaturaService.get(id)
      .subscribe(
        data => {
          this.currentAsignatura = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAsignatura() {
    this.asignaturaService.update(this.currentAsignatura.id, this.currentAsignatura)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La asignatura fue actualizada exitosamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAsignatura() {
    this.asignaturaService.delete(this.currentAsignatura.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/asignaturas']);
        },
        error => {
          console.log(error);
        });
  }

}
