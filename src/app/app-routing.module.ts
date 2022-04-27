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
    path: 'lista-utenti',
    loadChildren: () => import('./pages/lista-utenti/lista-utenti.module').then(m => m.ListaUtentiModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'dettaglio-utente/:id',
    loadChildren: () => import('./pages/dettaglio-utente/dettaglio-utente.module').then(m => m.DettaglioUtenteModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'dettaglio-post/:id',
    loadChildren: () => import('./pages/dettaglio-post/dettaglio-post.module').then(m => m.DettaglioPostModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
