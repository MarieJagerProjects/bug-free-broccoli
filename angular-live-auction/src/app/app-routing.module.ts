import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './views/auction/auction.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuctionDetailComponent } from './views/auction-detail/auction-detail.component';

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
