import { Component, OnInit } from '@angular/core';
import { Bid } from './bid';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  bid: Bid = {
    username: 'Testperson',
    lastBid: 1.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
