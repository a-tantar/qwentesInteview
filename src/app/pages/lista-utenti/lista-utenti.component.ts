import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaUtenti } from 'src/app/model/listaUtenti.model';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {
  listaUtenti: any[];

  constructor(private httpService: HttpService, private dataSharingService: DataSharingService, private router: Router) { }

  ngOnInit(): void {
    this.loadData()
  }


  loadData() {
    this.httpService.getListaUtenti().subscribe((res) => {
      this.listaUtenti = res.map(elem => {
        return {
          "id": elem?.id,
          "iniziali": elem.name.split(' ').map(function (s) { return s.charAt(0); }).join(''),
          "name": elem.name,
          "email": elem.email,
          "city": elem.address.city,
          "street": elem.address.street,
        }
      })
    });
  }

  dettaglioUtente(idUtente: number) {
    this.router.navigate(['/dettaglio-utente/', idUtente]);
  }


}
