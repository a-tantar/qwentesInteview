import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  isUserLoggedIn: boolean



  setUserLogged(isLogged: boolean) {
    this.isUserLoggedIn = isLogged
  }

  getUser() {
    return localStorage.getItem('user');
  }


}
