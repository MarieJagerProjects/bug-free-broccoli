import { Component, OnInit } from '@angular/core';
import { IAuction } from '../auction/IAuction';
import { AuctionService } from '../services/auction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.scss']
})
export class DashboardComponent implements OnInit {

  auctions: IAuction[] = [];

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.getAuctions();
  }

  //change to live auctions
  getAuctions(): void {
    this.auctionService.getAuctions().subscribe(auctions => this.auctions = auctions);
  }
}
