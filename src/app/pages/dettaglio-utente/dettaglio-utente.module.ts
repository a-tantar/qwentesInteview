import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioUtenteComponent } from './dettaglio-utente.component';
import { DettaglioUtenteRoutingModule } from './dettaglio-utente-routing.module';



@NgModule({
  declarations: [DettaglioUtenteComponent],
  imports: [
    CommonModule,
    DettaglioUtenteRoutingModule
  ]
})
export class DettaglioUtenteModule { }
