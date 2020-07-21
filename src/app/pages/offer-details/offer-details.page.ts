import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemSerivce, OfferItem } from '../../services/item.service';
import { Camera, CameraResultType, Permissions, PermissionType } from '@capacitor/core';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
})
export class OfferDetailsPage implements OnInit {
  public item: OfferItem;

  constructor(
    private readonly acr: ActivatedRoute,
    private readonly items: ItemSerivce,
    private readonly favourites: FavouritesService,
  ) {}

  async ngOnInit() {
    const id = this.acr.snapshot.params.id;
    this.item = await this.favourites.get(Number.parseInt(id, 10));

    if (!this.item) {
      this.item = await this.items.get(id);
    }
  }

  async onCapture($event: string) {
    if (!this.item.images) {
      this.item.images = [];
    }
    this.item.images.push($event);
    this.updateItemStore();
  }

  async updateItemStore() {
    await this.favourites.checkAndAdd(this.item);
  }

  async share() {
    try {
      // @ts-ignore
      await navigator.share({
        title: 'title',
        url: window.location.toString(),
        text: 'sharing some text',
      });
    } catch (err) {
      /*
               This error will appear if the user canceled the action of sharing.
             */
      alert(`Couldn't share ${err}`);
    }
  }
}
