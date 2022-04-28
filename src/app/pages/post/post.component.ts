import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listaPost: any

  constructor(private httpService: HttpService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData()
  }


  loadData() {
    this.httpService.getListaPost().subscribe((res) => {
      this.listaPost = res
    });
  }

  dettaglioPost(idPost: number) {
    this.router.navigate(['dettaglio-post/' + idPost])

  }

}
