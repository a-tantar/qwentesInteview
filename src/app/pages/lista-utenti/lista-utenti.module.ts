import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUtentiComponent } from './lista-utenti.component';
import { ListaUtentiRoutingModule } from './lista-utenti-routing.module';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ListaUtentiComponent],
  imports: [
    CommonModule,
    ListaUtentiRoutingModule,
    MatCardModule
  ]
})
export class ListaUtentiModule { }
