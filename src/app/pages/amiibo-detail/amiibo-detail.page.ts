import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonToolbar, IonFooter, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { chevronBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AmiiboService } from 'src/app/services/amiibo.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import Amiibo from 'src/app/models/Amiibo.model';

@Component({
  selector: 'app-amiibo-detail',
  templateUrl: './amiibo-detail.page.html',
  styleUrls: ['./amiibo-detail.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonContent, IonIcon, RouterLink, SharedModule, CommonModule, FormsModule, HeaderComponent]
})
export class AmiiboDetailPage implements OnInit {
  amiibo!: Amiibo;
  amiiboName: string = '';

  constructor(private http: AmiiboService, private actRoute: ActivatedRoute) {
    this.amiiboName = this.actRoute.snapshot.paramMap.get('name') as string

    addIcons({chevronBack});
  }

  ngOnInit() {
    this.getAmiibo(this.amiiboName)
  }

  getAmiibo(amiiboName: string) {
    this.http.getAmiiboName(amiiboName).subscribe({
      next: (resp: any) => {
        this.amiibo = [...resp.amiibo].find((e: Amiibo) => {
          return e.name === amiiboName;
        })
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }
}
