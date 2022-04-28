import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/model/utente.model';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrls: ['./dettaglio-post.component.css']
})
export class DettaglioPostComponent implements OnInit {
  listaPost: any[]
  dettaglioPost: any
  idPost: string;
  listaUtenti: any
  utente: string;
  dettaglioUtente: any
  listaCommenti: any;
  constructor(private httpService: HttpService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('id') as string;
    this.utente = this.route.snapshot.paramMap.get('idUtente') as string;
    console.log('ID UTENTE ', this.utente)
    this.loadDataUtente()
    this.loadData()
    this.loadDataCommenti()

  }


  loadDataUtente() {
    this.httpService.getUtente(this.utente).subscribe((res) => {
      this.dettaglioUtente = {
        "iniziali": res.name.split(' ').map(function (s) { return s.charAt(0); }).join(''),
        "name": res.name,
        "email": res.email,
        "street": res.address?.street,
        "city": res.address?.city,
        "companyName": res.company?.name
      }
    });


  }


  loadData() {
    this.httpService.getDettaglioPost(this.idPost).subscribe((res) => {
      this.dettaglioPost = res
    });
  }

  loadDataCommenti() {
    this.httpService.getListaCommenti(this.idPost).subscribe((res) => {
      this.listaCommenti = res
    });
  }


}
