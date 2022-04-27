import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: string | null;

  constructor(private fb: FormBuilder, private router: Router, private dataSharingService: DataSharingService) {
  }

  loginForm: FormGroup;


  ngOnInit(): void {
    this.isUserLoggedIn = this.dataSharingService.getUser()
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  login() {
    localStorage.setItem('token', "ho fatto l'accesso");
    localStorage.setItem('user', "logged");
    this.router.navigate(['lista-utenti']);
    this.dataSharingService.setUserLogged(true);
  }


}


