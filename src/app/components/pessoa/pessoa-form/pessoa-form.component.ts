import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PessoaService } from '../../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent implements OnInit {
  pessoaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private messageService: MessageService
  ) {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      const pessoa = this.pessoaForm.value;
      this.pessoaService.createPessoa(pessoa).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Pessoa cadastrada com sucesso!',
          });
          this.pessoaForm.reset();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao cadastrar pessoa. Por favor, tente novamente.',
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
