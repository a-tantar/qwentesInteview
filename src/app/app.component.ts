import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qwentesInterview';
  token: any
  isUserLoggedIn: string | null;

  constructor(private router: Router, private dataSharingService: DataSharingService) {
    this.token = localStorage.getItem('token')
    this.isUserLoggedIn = this.dataSharingService.getUser()
  }


}
