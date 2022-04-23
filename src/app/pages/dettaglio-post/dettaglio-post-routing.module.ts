import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioPostComponent } from './dettaglio-post.component';

const routes: Routes = [{
  path: '', component: DettaglioPostComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioPostRoutingModule { }
