import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { CicloVidaEditComponent } from './ciclo-vida/ciclo-vida-edit/ciclo-vida-edit.component';
import { CicloVidaAddComponent } from './ciclo-vida/ciclo-vida-add/ciclo-vida-add.component';
import { CicloVidaInactiveComponent } from './ciclo-vida/ciclo-vida-inactive/ciclo-vida-inactive.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'cycles', pathMatch: 'full' },
  { path: 'cycles', component: CicloVidaComponent },
  { path: 'menu', component: SidebarComponent },
  { path: 'ciclo-vida-edit', component: CicloVidaEditComponent },
  { path: 'ciclo-vida-add', component: CicloVidaAddComponent },
  { path: 'ciclo-vida-inactive', component: CicloVidaInactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CicloVidaComponent,
  CicloVidaInactiveComponent,
  CicloVidaAddComponent,
  CicloVidaEditComponent,
];
