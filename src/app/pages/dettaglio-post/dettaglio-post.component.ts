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
  constructor(private httpService: HttpService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('id') as string;
    this.loadData()
  }

  loadData() {
    this.httpService.getDettaglioPost(this.idPost).subscribe((res) => {
      this.dettaglioPost = res
    });
  }

}
