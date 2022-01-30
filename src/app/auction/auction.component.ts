import { Component, OnInit } from '@angular/core';
import { IAuction } from './IAuction';
import { AuctionService } from '../services/auction.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.template.html',
  styleUrls: ['./auction.style.scss']
})

export class AuctionComponent implements OnInit {
  
  auctions: IAuction[] = [];

  constructor(private auctionService: AuctionService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAuctions();
  }

  getAuctions(): void {
    this.auctionService.getAuctions().subscribe(auctions => this.auctions = auctions);
  }

}    
