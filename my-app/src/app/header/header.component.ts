import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() show: EventEmitter<void> = new EventEmitter<void>();
  value = false;
  showCart(value:boolean):void{
    this.value = !value;
    console.log(value);
    this.show.emit();
  }
}

