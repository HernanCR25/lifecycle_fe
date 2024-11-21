import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CicloVida } from '../models/CicloVida';
import { CicloVidaService } from '../services/ciclovida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css'],
})
export class CicloVidaComponent implements OnInit {
  showNavbar: boolean = true;
  cycles: CicloVida[] = [];
  formBuscar: FormGroup;
  searchName: string = '';

  constructor(
    private cicloVidaService: CicloVidaService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.formBuscar = this.fb.group({
      last_name: [''],
      name: [''],
      number_document: [''],
    });
  }

  ngOnInit(): void {
    this.fetchCycles();
  }

  fetchCycles(): void {
    this.cicloVidaService.getCycles().subscribe(
      (cycles) => {
        this.cycles = cycles.sort((a, b) => a.nameIto.localeCompare(b.nameIto));
      },
      (error) => {
        console.error('Error al obtener los ciclos:', error);
        this.showFetchError(); // Llamar a la función de error
      }
    );
  }

  showFetchError(): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al realizar la búsqueda. Por favor, inténtelo de nuevo.',
    });
  }

  delete(cicloVida: CicloVida): void {
    console.log('Desactivando ciclo con ID: ', cicloVida.id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Está seguro?',
        text: `¿Seguro que desea eliminar a la persona ${cicloVida.nameIto} ${cicloVida.typeIto}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.cicloVidaService.delete(cicloVida.id).subscribe(
            (response) => {
              this.cycles = this.cycles.filter((st) => st !== cicloVida);
              swalWithBootstrapButtons.fire(
                'Ciclo de vida eliminado!',
                `Ciclo ${cicloVida.nameIto} ${cicloVida.typeIto} eliminada con éxito.`,
                'success'
              );
            },
            (error) => {
              console.error('Error al eliminar el cilo:', error);
              swalWithBootstrapButtons.fire(
                'Error',
                'Ocurrió un error al intentar eliminar el ciclo.',
                'error'
              );
            }
          );
        }
      });
  }
}
