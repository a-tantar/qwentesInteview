import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/AuthGuard.service';

const routes: Routes = [
  {
    path: 'login',
    /* loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) */
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'lista-utenti',
    loadChildren: () => import('./pages/lista-utenti/lista-utenti.module').then(m => m.ListaUtentiModule),
    canLoad: [AuthGuardService],
  },
  {
    path: 'dettaglio-utente',
    loadChildren: () => import('./pages/dettaglio-utente/dettaglio-utente.module').then(m => m.DettaglioUtenteModule),
    canLoad: [AuthGuardService],
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule),
    canLoad: [AuthGuardService],
  },
  {
    path: 'dettaglio-post',
    loadChildren: () => import('./pages/dettaglio-post/dettaglio-post.module').then(m => m.DettaglioPostModule),
    canLoad: [AuthGuardService],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
