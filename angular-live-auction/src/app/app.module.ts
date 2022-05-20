import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuctionComponent } from './views/auction/auction.component';
import { BidComponent } from './views/bid/bid.component';
import { AuctionDetailComponent } from './views/auction-detail/auction-detail.component';
import { MessagesComponent } from './views/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SideBarComponent } from './views/side-bar/side-bar.component';
import { FooterComponent } from './views/footer/footer.component';
import { AuctionService } from './services/auction.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuctionComponent,
    BidComponent,
    AuctionDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
