import { Routes } from '@angular/router';
import { GrupoListComponent } from './components/grupo/grupo-list/grupo-list.component';
import { PessoaFormComponent } from './components/pessoa/pessoa-form/pessoa-form.component';
import { LancamentoFormComponent } from './components/lancamento/lancamento-form/lancamento-form.component';
import { RelatorioFormComponent } from './components/relatorio/relatorio-form/relatorio-form.component';
import { GrupoFormComponent } from './components/grupo/grupo-form/grupo-form.component';
import { MetaFormComponent } from './components/meta/meta-form/meta-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoaFormComponent },
  { path: 'lancamento', component: LancamentoFormComponent },
  { path: 'relatorio', component: RelatorioFormComponent },
  { path: 'grupo', component: GrupoFormComponent },
  { path: 'Meta', component: MetaFormComponent },
];
