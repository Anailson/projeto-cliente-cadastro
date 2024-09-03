import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../../model/clienteModel';
import { ClienteService } from '../../../service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'idade', 'ativo', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (err) => console.error('Erro ao carregar clientes', err)
    });
  }

}
