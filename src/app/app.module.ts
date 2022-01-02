import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuctionComponent } from './auction/auction.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetablesComponent,
    NavBarComponent,
    AuctionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
