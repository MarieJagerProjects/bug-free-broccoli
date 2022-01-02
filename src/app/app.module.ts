import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuctionComponent } from './auction/auction.component';
import { BidComponent } from './bid/bid.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetablesComponent,
    NavBarComponent,
    AuctionComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
