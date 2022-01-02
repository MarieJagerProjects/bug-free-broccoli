import { Component, OnInit } from '@angular/core';
import { Auction } from './auction';
import { Vegetable } from '../vegetables/vegetable';
import { Bid } from '../bid/bid';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {

  vegetable: Vegetable = {
    id: 1,
    name: 'Cucumber',
    amount: 10
  };

  auction: Auction = {
    id: 1,
    name: 'testAuction',
    vegetable: this.vegetable
  }

  
  bid: Bid = {
    username: 'Testperson',
    lastBid: 1.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}    
