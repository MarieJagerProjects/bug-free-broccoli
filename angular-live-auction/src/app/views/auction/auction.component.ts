import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.template.html',
  styleUrls: ['./auction.style.scss']
})

export class AuctionComponent implements OnInit {
  
  auctions$: Observable<any[]> | undefined;

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctions$ = this.auctionService.getAuctions();
  }

}    
