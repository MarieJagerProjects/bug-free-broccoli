import { Component, OnInit } from '@angular/core';
import { Vegetable } from './vegetable';
import { Auction } from '../auction/auction';


@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})

export class VegetablesComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
