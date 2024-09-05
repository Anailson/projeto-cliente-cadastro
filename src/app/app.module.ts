import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componente/menu/menu.component';
import { ClienteCreateComponent } from './features/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './features/cliente/cliente-list/cliente-list.component';
import { CadUsuarioComponent } from './features/usuario/cad-usuario/cad-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
    ClienteListComponent,
    CadUsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Angular Material Modules
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule, // Adicione o módulo do Sidenav
    MatToolbarModule, // Adicione o módulo da Toolbar
    MatListModule, // Adicione o módulo da List
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,

    // NgRx Store and Effects
    StoreModule.forRoot({}, {}), // Configure o estado inicial e reducers
    EffectsModule.forRoot([]) // Configure os efeitos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
