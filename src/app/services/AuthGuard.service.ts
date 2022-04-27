import { Injectable } from '@angular/core';
import { Router, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {
  }
  user: any
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.user = localStorage.getItem('token')
    if (this.user) {
      // alert('You are not allowed to view this page');
      return true;
    }
    this._router.navigate(['/login'])
    return false;
  }

}
