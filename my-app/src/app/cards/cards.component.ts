import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/card.model';
import { cardMock } from '../mock/card.mock';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  Title ="Наши товары";
  Cards: CardModel[] = cardMock;
  addToCart(id: number){
    const card = this.Cards.find((item: CardModel)=>{
      return item.id === id;
    })
    if(card){
      console.log(card.id);
    }
  }
}
