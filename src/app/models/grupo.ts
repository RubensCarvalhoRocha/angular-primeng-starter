import { Meta } from './meta';
import { Pessoa } from './pessoa';
export interface Grupo {
  id?: number;
  nome: string;
  descricao?: string;
  pessoas?: Pessoa[];
  isSaldoNegativo?: boolean;
  metas?: Meta[];
}
