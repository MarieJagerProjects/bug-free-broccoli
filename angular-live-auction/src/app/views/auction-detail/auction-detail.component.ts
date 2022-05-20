import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuctionService } from '../../services/auction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.template.html',
  styleUrls: ['./auction-detail.style.scss']
})
export class AuctionDetailComponent implements OnInit {

  auction$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private auctionService: AuctionService, private location: Location) { }

  ngOnInit(): void {
    this.getAuction();
  }

  getAuction(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.auction$ = this.auctionService.getAuction(id);
  }

  goBack(): void {
    this.location.back();
  }

}
