import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { TabsComponent } from "../../components/tabs/tabs.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from "../../components/card/card.component";
import { AmiiboService } from 'src/app/services/amiibo.service';
import Amiibo from 'src/app/models/Amiibo.model';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonButton, IonContent, CommonModule, FormsModule, TabsComponent, HeaderComponent, CardComponent, SharedModule]
})
export class RandomPage implements OnInit {
  allAmiibos: Amiibo[] = [];
  amiibo!: Amiibo;

  constructor(private http: AmiiboService) { }
  
  ngOnInit() {
    this.getAllAmiibos();
  }

  getAllAmiibos() {
    this.http.getAllAmiibo().subscribe({
      next: (resp: any) => {
        this.allAmiibos = [...resp.amiibo]

        this.setRandomAmiibo()
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  public setRandomAmiibo() {
    this.amiibo = this.allAmiibos[
      Math.floor(Math.random() * (this.allAmiibos.length-1))
    ]
  }
}
