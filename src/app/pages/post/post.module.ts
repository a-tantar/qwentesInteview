import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { ListaPostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    ListaPostRoutingModule,
    MatCardModule
  ]
})
export class PostModule { }
