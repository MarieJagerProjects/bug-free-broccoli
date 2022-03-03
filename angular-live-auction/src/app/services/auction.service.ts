import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  readonly auctionAPIUrl = "https://localhost:7267/api";

  constructor(private messageService: MessageService, private http:HttpClient) { }

  getAuctions(): Observable<any[]> {
    this.messageService.add(`AuctionService: fetched auctions`);
    return this.http.get<any>(this.auctionAPIUrl + '/Auctions');
  }

  getAuction(id: number): Observable<any> {
    this.messageService.add(`AuctionService: fetched auction id=${id}`);
    return this.http.get<any>(this.auctionAPIUrl + `/Auctions/${id}`);
  }

  addAuction(data:any) {
    return this.http.post(this.auctionAPIUrl + '/Auctions', data);
  }

  updateAuction(id: number|string, data:any) {
    return this.http.put(this.auctionAPIUrl + `/inspections/${id}`, data);
  }
  
}
