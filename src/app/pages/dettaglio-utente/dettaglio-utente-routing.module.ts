import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioUtenteComponent } from './dettaglio-utente.component';

const routes: Routes = [{
  path: '', component: DettaglioUtenteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioUtenteRoutingModule { }
