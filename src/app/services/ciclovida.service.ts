import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CicloVida } from '../models/CicloVida';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CicloVidaService {
  private urlEndPoint: string = 'http://localhost:8080/cicloVida';

  constructor(private http: HttpClient) {}

  update(cicloVida: CicloVida): Observable<CicloVida> {
    const url = `${this.urlEndPoint}/update/${cicloVida.id}`;
    return this.http
      .put<CicloVida>(url, cicloVida)
      .pipe(catchError(this.handleError));
  }

  getCycles(): Observable<CicloVida[]> {
    return this.http
      .get<CicloVida[]>(this.urlEndPoint)
      .pipe(catchError(this.handleError));
  }

  getInactiveCycles(): Observable<CicloVida[]> {
    const url = `${this.urlEndPoint}/inactivos`;
    return this.http.get<CicloVida[]>(url).pipe(catchError(this.handleError));
  }

  create(cicloVida: CicloVida): Observable<CicloVida> {
    return this.http
      .post<CicloVida>(this.urlEndPoint, cicloVida)
      .pipe(catchError(this.handleError));
  }

  getCycle(id: number): Observable<CicloVida> {
    return this.http
      .get<CicloVida>(`${this.urlEndPoint}/${id}`)
      .pipe(catchError(this.handleError));
  }

  activate(cicloVida: CicloVida): Observable<CicloVida> {
    const url = `${this.urlEndPoint}/activar/${cicloVida.id}`;

    return this.http.put<CicloVida>(url, {}).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.urlEndPoint}/inactivar/${id}`)
      .pipe(catchError(this.handleError));
  }

  deletePhysically(id: number): Observable<CicloVida> {
    return this.http
      .delete<CicloVida>(`${this.urlEndPoint}/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.error('Error:', error);
    return throwError('Ocurrió un error. Por favor, inténtelo de nuevo.');
  }
}
