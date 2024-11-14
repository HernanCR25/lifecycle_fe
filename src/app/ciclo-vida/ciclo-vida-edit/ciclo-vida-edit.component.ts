// person-edit.component.ts
import { CicloVida } from '../../models/CicloVida';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CicloVidaService } from '../../services/ciclovida.service';

@Component({
  selector: 'app-ciclo-vida-edit',
  templateUrl: './ciclo-vida-edit.component.html',
  styleUrls: ['./ciclo-vida-edit.component.css'],
})
export class CicloVidaEditComponent implements OnInit {
  cicloVida: CicloVida = new CicloVida();

  constructor(
    private cicloVidaService: CicloVidaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCycle();
  }

  getCycle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cicloVidaService.getCycle(id).subscribe((cicloVida: CicloVida) => {
      this.cicloVida = cicloVida;
    });
  }

  onSubmit() {
    this.cicloVidaService.update(this.cicloVida).subscribe(
      () => {
        console.log(`Person with id ${this.cicloVida.id} has been updated.`);
        this.router.navigate(['/cycles']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
