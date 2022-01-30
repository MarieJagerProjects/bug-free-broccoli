import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuctionDetailComponent } from './auction/auction-detail/auction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auctions', component: AuctionComponent },
  { path: 'detail/:id', component: AuctionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
