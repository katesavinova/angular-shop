import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
