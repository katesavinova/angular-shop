import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() Card: CardModel;
  @Output() add: EventEmitter<number> = new EventEmitter<number>();

  addToCart(): void{
    this.add.emit(this.Card.id);
  };
}
