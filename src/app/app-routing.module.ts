import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'home', component: ClienteListComponent },
 // { path: 'usuario', component: CadUsuarioComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para home por padrão
  //{ path: '**', redirectTo: '/home' } // Redireciona qualquer rota não encontrada para home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
