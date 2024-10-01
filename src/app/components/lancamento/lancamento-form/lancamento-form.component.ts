import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { LancamentoService } from '../../../services/lancamento.service';
import { DropdownModule } from 'primeng/dropdown';
import { Tipo } from '../../../models/enun/tipo';
import { Categoria } from '../../../models/enun/categoria';
import { Grupo } from '../../../models/grupo';

@Component({
  selector: 'app-lancamento-form',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
    DropdownModule,
  ],
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css'],
  providers: [MessageService],
})
export class LancamentoFormComponent implements OnInit {
  lancamentoForm: FormGroup;
  tipos: Tipo[] = [];
  categorias: Categoria[] = [];
  grupos: Grupo[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService,
    private messageService: MessageService
  ) {
    this.lancamentoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      descricao: ['', [Validators.maxLength(255)]],
      data: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      valor: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.lancamentoForm.value);
    if (this.lancamentoForm.valid) {
      const lancamento = this.lancamentoForm.value;
      this.lancamentoService.createLancamento(lancamento).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Lançamento cadastrado com sucesso!',
          });
          this.lancamentoForm.reset();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao cadastrar lançamento. Por favor, tente novamente.',
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Por favor, preencha todos os campos corretamente.',
      });
    }
  }
}
