import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  token: any
  isUserLoggedIn: string | null;

  constructor(private router: Router, public dataSharingService: DataSharingService) {
    this.isUserLoggedIn = this.dataSharingService.getUser()
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    console.log('token', this.token)
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['login']);
    this.dataSharingService.setUserLogged(false);
  }
}
