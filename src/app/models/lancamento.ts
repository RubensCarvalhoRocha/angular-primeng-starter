import { Grupo } from './grupo';
import { Categoria } from './enun/categoria';
import { Tipo } from './enun/tipo';
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
