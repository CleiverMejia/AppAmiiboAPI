import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from "../../components/card/card.component";
import { HttpClient } from '@angular/common/http';

import Amiibo from 'src/app/models/Amiibo.model';
import { AmiiboService } from 'src/app/services/amiibo.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TabsComponent } from "../../components/tabs/tabs.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonCol, IonRow, IonGrid, IonSearchbar, IonContent, CommonModule, FormsModule, HeaderComponent, CardComponent, SharedModule, TabsComponent]
})
export class HomePage implements OnInit {
  amiibos: Amiibo[] = [];
  allAmiibos: Amiibo[] = [];
  page: number = 0;
  amiiboName: string = '';

  constructor(private http: AmiiboService) { }

  ngOnInit() {
    this.getAllAmiibos();
  }

  getAllAmiibos() {
    this.http.getAllAmiibo().subscribe({
      next: (resp: any) => {
        this.allAmiibos = [...resp.amiibo]

        this.getAmiibos()
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  getAmiibos(event?: any) {
    this.amiibos.push(
      ...this.allAmiibos.splice(
        this.page*18,
        (1+this.page)*18
      )
    )

    if(event) event.target.complete();
  }

  searchAmiibo() {
    this.page = 0;

    this.http.getAmiiboName(this.amiiboName).subscribe({
      next: (resp: any) => {
        this.allAmiibos = [...resp.amiibo]
        this.amiibos = []

        this.getAmiibos()
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }
}
