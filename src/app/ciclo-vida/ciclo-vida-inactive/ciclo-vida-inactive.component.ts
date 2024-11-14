import { Component, OnInit } from '@angular/core';
import { CicloVida } from '../../models/CicloVida';
import { CicloVidaService } from '../../services/ciclovida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciclo-vida-inactive',
  templateUrl: './ciclo-vida-inactive.component.html',
  styleUrls: ['./ciclo-vida-inactive.component.css'],
})
export class CicloVidaInactiveComponent implements OnInit {
  showNavbar: boolean = true;
  cicloVidaI: CicloVida[] = []; // Inicializa la propiedad como un arreglo vacío

  constructor(private cicloVidaService: CicloVidaService) {}

  ngOnInit() {
    this.cicloVidaService.getInactiveCycles().subscribe((cycles) => {
      this.cicloVidaI = cycles;
      this.cicloVidaI = this.cicloVidaI.sort((a, b) =>
        a.nameIto.localeCompare(b.typeIto)
      );
    });
  }

  activateCycle(cicloVida: CicloVida) {
    this.cicloVidaService.activate(cicloVida).subscribe(
      () => {
        console.log(`La persona ${cicloVida.nameIto} ha sido activada.`);
        this.showSuccessAlert(
          `La persona ${cicloVida.typeIto} ha sido activada.`
        );
      },
      (error) => {
        console.error('Error:', error);
        this.showErrorAlert('Error al activar a la persona');
      }
    );
  }

  showSuccessAlert(message: string) {
    Swal.fire({
      title: 'Éxito',
      text: message,
      icon: 'success',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Recarga la página actual sin reiniciar la aplicación
        location.reload();
      }
    });
  }

  showErrorAlert(message: string) {
    Swal.fire('Error', message, 'error');
  }

  deletePhysically(cicloVida: CicloVida) {
    this.cicloVidaService.deletePhysically(cicloVida.id).subscribe(
      () => {
        console.log(
          `La persona ${cicloVida.nameIto} ha sido eliminada físicamente.`
        );
        this.showSuccessAlertF(
          `La persona ${cicloVida.typeIto} ha sido eliminada físicamente.`
        );
        this.reloadInactiveStudents();
      },
      (error) => {
        console.error('Error:', error);
        this.showErrorAlertF('Error al eliminar físicamente a la persona');
      }
    );
  }

  showSuccessAlertF(message: string) {
    Swal.fire({
      title: 'Éxito',
      text: message,
      icon: 'success',
      showConfirmButton: true,
    });
  }

  showErrorAlertF(message: string) {
    Swal.fire('Error', message, 'error');
  }
  // En tu componente TypeScript
  formatDate(dateString: string): string {
    // Suponiendo que dateString está en el formato YYYY-MM-DD
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  reloadInactiveStudents() {
    this.cicloVidaService.getInactiveCycles().subscribe((students) => {
      this.cicloVidaI = students;
      this.cicloVidaI = this.cicloVidaI.sort((a, b) =>
        a.typeIto.localeCompare(b.nameIto)
      );
    });
  }
}
