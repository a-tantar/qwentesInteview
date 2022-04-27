import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioPostComponent } from './dettaglio-post.component';
import { DettaglioPostRoutingModule } from './dettaglio-post-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [DettaglioPostComponent],
  imports: [
    CommonModule,
    DettaglioPostRoutingModule,
    MatCardModule
  ]
})
export class DettaglioPostModule { }
