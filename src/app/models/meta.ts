import { Categoria } from './categoria';
import { Grupo } from './grupo';
import { Tipo } from './tipo';
export interface Meta {
  id?: number;
  tipo: Tipo;
  valorObjetivo: number;
  valorAtual: number;
  grupo: Grupo;
  categoria: Categoria;
}
