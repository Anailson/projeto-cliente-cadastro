import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../../../model/clienteModel';
import { ClienteService } from '../../../service/cliente.service';
import { ClienteCreateComponent } from '../cliente-create/cliente-create.component';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'idade', 'ativo', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.dataSource.data = clientes;
      this.dataSource.paginator = this.paginator;
      this.loadClientes();
    });
  }

  // Método para abrir o diálogo de criação de cliente
  openCreateClienteDialog(): void {
    const dialogRef = this.dialog.open(ClienteCreateComponent, {
      width: '400px' // Define o tamanho do diálogo
    });

    // Após o diálogo ser fechado, atualizamos a lista de clientes
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'salvo') {
        // Recarregar a lista de clientes após salvar um novo cliente
        this.clienteService.getClientes().subscribe(clientes => {
          this.dataSource.data = clientes;
        });
      }
    });
  }


  loadClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.dataSource.data = clientes;
      this.dataSource.paginator = this.paginator;
    });
  }
  //Deletar
    // Método para deletar um cliente
    onDelete(cliente: Cliente): void {
      if (cliente.id != null) {
        const confirmation = confirm(`Você tem certeza que deseja excluir o cliente ${cliente.nome}?`);
        if (confirmation) {
          this.clienteService.deleteCliente(cliente.id).subscribe(() => {
            this.loadClientes();
          }, error => {
            console.error('Erro ao excluir o cliente', error);
          });
        }
      } else {
        console.error('ID do cliente não está definido');
      }
    }
}
