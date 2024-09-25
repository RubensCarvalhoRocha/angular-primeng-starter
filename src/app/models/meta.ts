import { Categoria } from './enun/categoria';
import { Grupo } from './grupo';
import { Tipo } from './enun/tipo';
export interface Meta {
  id?: number;
  tipo: Tipo;
  valorObjetivo: number;
  valorAtual: number;
  grupo: Grupo;
  categoria: Categoria;
}
