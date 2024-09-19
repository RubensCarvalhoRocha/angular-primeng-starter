import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { GrupoService } from '../../../services/grupo.service';

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css',
})
export class GrupoFormComponent implements OnInit {
  grupoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private grupoService: GrupoService,
    private messageService: MessageService
  ) {
    this.grupoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      descricao: ['', [Validators.maxLength(255)]],
      isSaldoNegativo: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.grupoForm.valid) {
      const grupo = this.grupoForm.value;
      this.grupoService.createGrupo(grupo).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Grupo cadastrado com sucesso!',
          });
          this.grupoForm.reset();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao cadastrar grupo. Por favor, tente novamente.',
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
