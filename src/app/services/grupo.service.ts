import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {

  constructor(private http: HttpClient) {}

  createGrupo(grupo: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/criar`, grupo);
  }
}
