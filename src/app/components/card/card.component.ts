import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterLink],
})
export class CardComponent  implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() gameSeries: string = '';

  constructor() { }

  ngOnInit() {}

}
