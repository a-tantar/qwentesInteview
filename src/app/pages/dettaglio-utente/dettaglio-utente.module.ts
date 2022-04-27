import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioUtenteComponent } from './dettaglio-utente.component';
import { DettaglioUtenteRoutingModule } from './dettaglio-utente-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/angular-material.module';



@NgModule({
  declarations: [DettaglioUtenteComponent],
  imports: [
    CommonModule,
    DettaglioUtenteRoutingModule,
/*     MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, */
    MaterialModule
  ]
})
export class DettaglioUtenteModule { }
