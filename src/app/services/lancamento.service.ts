import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Lancamento } from '../models/lancamento';

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  constructor(private http: HttpClient) {}

  createLancamento(lancamento : Lancamento): Observable<any> {
    return this.http.post<any>(`${environment.api}/lancamento/criar`, lancamento);
  }
}
