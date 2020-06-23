import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/fav-list/fav-list.module').then( m => m.FavListPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'offer-details',
    loadChildren: () => import('./pages/offer-details/offer-details.module').then( m => m.OfferDetailsPageModule)
  },
  {
    path: 'new-offer',
    loadChildren: () => import('./pages/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
