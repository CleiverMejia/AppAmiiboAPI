import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TabsComponent } from "../../components/tabs/tabs.component";
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsComponent, SharedModule, HeaderComponent]
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
