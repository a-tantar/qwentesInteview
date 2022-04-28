import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaCommenti } from '../model/listaCommenti.model';
import { ListaPost } from '../model/listaPost.model';
import { ListaUtenti } from '../model/listaUtenti.model';
import { Post } from '../model/post.model';
import { Utente } from '../model/utente.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpService: HttpClient) { }

  getListaUtenti(): Observable<ListaUtenti[]> {
    return this.httpService.get<ListaUtenti[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUtente(idUtente: string): Observable<Utente> {
    return this.httpService.get<Utente>(`https://jsonplaceholder.typicode.com/users/${idUtente}`);
  }

  patchData(data: any, idUtente: any) {
    return this.httpService.patch<any>(`https://jsonplaceholder.typicode.com/users/${idUtente}`, { data }, this.options);
  }

  getPost(idUtente: string): Observable<Post> {
    return this.httpService.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${idUtente}`);
  }

  getDettaglioPost(idPost: string): Observable<Post> {
    return this.httpService.get<Post>(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
  }

  getListaCommenti(idPost: string): Observable<ListaCommenti> {
    return this.httpService.get<ListaCommenti>(`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`);
  }

  getListaPost(): Observable<ListaPost> {
    return this.httpService.get<ListaPost>(`https://jsonplaceholder.typicode.com/posts`);
  }

}
