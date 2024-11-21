import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CicloVida } from '../../models/CicloVida';
import { CicloVidaService } from '../../services/ciclovida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciclo-vida-add',
  templateUrl: './ciclo-vida-add.component.html',
  styleUrls: ['./ciclo-vida-add.component.css'],
})
export class CicloVidaAddComponent implements OnInit {
  cicloVida: CicloVida = new CicloVida();
  titulo: string = 'CREAR PERSON';

  constructor(
    public cicloVidaService: CicloVidaService,
    public router: Router,
    public activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarCicloVida();
  }

  cargarCicloVida(): void {
    this.activateRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.cicloVidaService
          .getCycle(id)
          .subscribe((cycle) => (this.cicloVida = cycle));
      }
    });
  }

  create(): void {
    this.cicloVidaService.create(this.cicloVida).subscribe(
      (cicloVida) => {
        this.router.navigate(['/cycles']);
        Swal.fire(
          'Nueva Persona',
          `Persona ${cicloVida.nameIto} ${cicloVida.typeIto} creado con éxito!`,
          'success'
        );
      },
      (error) => {
        Swal.fire('Error', 'Ocurrió un error al crear la persona', 'error');
        console.error('Error creando usuario:', error);
      }
    );
  }
}
