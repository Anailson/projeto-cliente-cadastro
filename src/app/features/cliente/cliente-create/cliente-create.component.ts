import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../../service/cliente.service';
import { Cliente } from '../../../model/clienteModel';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
  cadastroForm!: FormGroup;

  constructor(
    private clienteService: ClienteService,
    public dialogRef: MatDialogRef<ClienteCreateComponent>
  ) { }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const formData: Cliente = this.cadastroForm.value;

      this.clienteService.createCliente(formData).subscribe({
        next: (response) => {
          console.log('Cliente salvo com sucesso', response);
          this.dialogRef.close('salvo'); // Fecha o diálogo e informa que o cliente foi salvo
        },
        error: (err) => {
          console.error('Erro ao salvar cliente', err);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
