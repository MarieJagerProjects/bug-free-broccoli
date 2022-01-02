import { Component, OnInit } from '@angular/core';
import { Auction } from './auction';
import { Bid } from '../bid/bid';
import { AUCTION } from '../mocks/mock-auctions';
import { BID } from '../mocks/mock-bids';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})

export class AuctionComponent implements OnInit {

  auctions = AUCTION;

  constructor() { }

  ngOnInit(): void {
  }

}    
