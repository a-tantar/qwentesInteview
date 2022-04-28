import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/model/utente.model';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dettaglio-utente',
  templateUrl: './dettaglio-utente.component.html',
  styleUrls: ['./dettaglio-utente.component.css']
})
export class DettaglioUtenteComponent implements OnInit {

  listaPost: any[]
  dettaglioUtente: any
  utente: string;
  dettaglioUtenteForm: FormGroup
  @Output() onSubmit = new EventEmitter<any>();
  data: any;
  posts: any
  constructor(private httpService: HttpService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.paramMap.get('id') as string;
    this.dettaglioUtenteForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required]
    });
    this.loadData()
    this.loadPost()
  }



  loadData() {
    this.httpService.getUtente(this.utente).subscribe((res) => {
      this.dettaglioUtente = {
        "iniziali": res.name.split(' ').map(function (s) { return s.charAt(0); }).join(''),
        "name": res.name,
        "email": res.email,
        "companyName": res.company?.name
      }
      this.setFormValue(this.dettaglioUtente)
    });

  }

  loadPost() {
    this.httpService.getPost(this.utente).subscribe((res) => {
      this.posts = res
    });

  }


  setFormValue(utente: any) {
    this.dettaglioUtenteForm.controls['name'].setValue(utente.name)
    this.dettaglioUtenteForm.controls['email'].setValue(utente.email)
    this.dettaglioUtenteForm.controls['companyName'].setValue(utente.companyName)
  }

  send() {

    this.data = {
      name: this.dettaglioUtenteForm.controls['name'].value,
      email: this.dettaglioUtenteForm.controls['email'].value,
      company: {
        name: this.dettaglioUtenteForm.controls['companyName'].value,
      }
    }

    this.httpService.patchData(this.data, this.utente).subscribe();

    this.onSubmit.emit(this.dettaglioUtenteForm.value)
  }

  dettaglioPost(id: number) {
    this.router.navigate(['user/' + this.utente + '/dettaglio-post/' + id])
  }


}
