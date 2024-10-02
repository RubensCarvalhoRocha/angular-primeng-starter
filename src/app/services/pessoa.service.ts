import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private http: HttpClient) {}

  createPessoa(grupo: Grupo): Observable<any> {
    return this.http.post<any>(`${environment.api}/pessoas`, grupo);
  }
}
