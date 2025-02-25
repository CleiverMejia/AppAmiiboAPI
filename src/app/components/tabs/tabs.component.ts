import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonFooter,
  IonToolbar,
} from '@ionic/angular/standalone';
import { homeOutline, starOutline, repeatOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonFooter, IonToolbar, RouterLink]
})
export class TabsComponent  implements OnInit {

  constructor() { 
    addIcons({ homeOutline, starOutline, repeatOutline})
  }

  ngOnInit() {}

}
