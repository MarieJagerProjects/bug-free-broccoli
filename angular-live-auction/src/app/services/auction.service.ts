import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuction } from '../views/auction/IAuction';
import { AUCTIONS } from '../mocks/mock-auctions';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  readonly auctionAPIUrl = "https://localhost:7267/api";

  constructor(private messageService: MessageService, private http:HttpClient) { }

  getAuctions(): Observable<IAuction[]> {
    const auctions = of(AUCTIONS);
    this.messageService.add(`AuctionService: fetched auctions`);
    return auctions;
  }

  getAuction(id: number): Observable<IAuction> {
    const auction = AUCTIONS.find(h => h.id === id)!;
    this.messageService.add(`AuctionService: fetched auction id=${id}`);
    return of(auction);
  }
}
