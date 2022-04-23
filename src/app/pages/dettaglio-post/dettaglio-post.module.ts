import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioPostComponent } from './dettaglio-post.component';
import { DettaglioPostRoutingModule } from './dettaglio-post-routing.module';



@NgModule({
  declarations: [DettaglioPostComponent],
  imports: [
    CommonModule,
    DettaglioPostRoutingModule
  ]
})
export class DettaglioPostModule { }
