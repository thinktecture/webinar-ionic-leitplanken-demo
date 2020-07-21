import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { OfferItem } from '../../services/item.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.page.html',
  styleUrls: ['./fav-list.page.scss'],
})
export class FavListPage implements OnInit {
  items$: Promise<OfferItem[]>;

  constructor(private readonly favourites: FavouritesService) {}

  async ionViewWillEnter() {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.items$ = this.favourites.getAll();
  }
}
