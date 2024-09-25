import { Grupo } from './grupo';
import { Categoria } from './categoria';
import { Tipo } from './tipo';
export interface Lancamento {
  id?: number;
  nome: string;
  descricao?: string;
  data: Date;
  tipo: Tipo;
  valor: number;
  categoria: Categoria;
  grupo: Grupo;
}
