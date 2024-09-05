import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './features/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './features/cliente/cliente-list/cliente-list.component';

const routes: Routes = [
  { path: 'clientes/cadastrar', component: ClienteCreateComponent }, // Rota para o formulário de criação
  { path: 'clientes', component: ClienteListComponent }, // Rota para listar clientes
  { path: '', redirectTo: '/clientes', pathMatch: 'full' } // Redireciona para a lista de clientes por padrão
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
