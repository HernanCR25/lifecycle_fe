import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { CicloVidaEditComponent } from './ciclo-vida/ciclo-vida-edit/ciclo-vida-edit.component';
import { CicloVidaAddComponent } from './ciclo-vida/ciclo-vida-add/ciclo-vida-add.component';
import { CicloVidaInactiveComponent } from './ciclo-vida/ciclo-vida-inactive/ciclo-vida-inactive.component';

const routes: Routes = [
  { path: '', redirectTo: 'cycles', pathMatch: 'full' },
  { path: 'cycles', component: CicloVidaComponent },
  { path: 'menu', component: SidebarComponent },
  { path: 'ciclo-vida-add', component: CicloVidaAddComponent },
  { path: 'ciclo-vida-edit/:id', component: CicloVidaEditComponent },
  { path: 'ciclo-vida-inactive', component: CicloVidaInactiveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CicloVidaComponent,
    CicloVidaAddComponent,
    CicloVidaEditComponent,
    CicloVidaInactiveComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
