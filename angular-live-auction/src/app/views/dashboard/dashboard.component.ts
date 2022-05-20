import { Component, OnInit } from '@angular/core';

import { AuctionService } from '../../services/auction.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.scss']
})
export class DashboardComponent implements OnInit {

  auctions$: Observable<any[]> | undefined;

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctions$ = this.auctionService.getAuctions();
  }
}
