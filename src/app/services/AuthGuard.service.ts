import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanLoad {
  constructor(private _router: Router) {
  }

  user: string | undefined


  checkTokenExpiration() {
    // checking whether your token has expired
    if (this.user) {
      this._router.navigate(['/lista-utenti'])
      return true;
    } else {
      return false
    }

  }

  canLoad() {
    return this.checkTokenExpiration()
  }

}
