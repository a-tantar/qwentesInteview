import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUtentiComponent } from './lista-utenti.component';
import { ListaUtentiRoutingModule } from './lista-utenti-routing.module';



@NgModule({
  declarations: [ListaUtentiComponent],
  imports: [
    CommonModule,
    ListaUtentiRoutingModule
  ]
})
export class ListaUtentiModule { }
