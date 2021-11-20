import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/card.model';
import { cardMock } from '../mock/card.mock';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  Cards: CardModel[] = cardMock;
  
}
