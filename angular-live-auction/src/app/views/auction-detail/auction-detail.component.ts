import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IAuction } from '../auction/IAuction';
import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.template.html',
  styleUrls: ['./auction-detail.style.scss']
})
export class AuctionDetailComponent implements OnInit {

  auction?: IAuction;

  constructor(private route: ActivatedRoute, private auctionService: AuctionService, private location: Location) { }

  ngOnInit(): void {
    this.getAuction();
  }

  getAuction(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.auctionService.getAuction(id).subscribe(auction => this.auction = auction);
  }

  goBack(): void {
    this.location.back();
  }

}
