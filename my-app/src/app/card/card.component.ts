import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() Card: CardModel;
}
