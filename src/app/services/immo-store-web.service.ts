import { Injectable, InjectionToken } from '@angular/core';
import { Storage } from '@capacitor/core';
import { OfferItem } from './item.service';
import { environment } from '../../environments/environment';
import Dexie from 'dexie';

export const STORAGE_TOKEN = new InjectionToken<ImmoStorage>('Inject Storage');

export interface ImmoStorage {
  getOffers(): Promise<OfferItem[]>;

  getOffer(id: number): Promise<OfferItem>;

  addOffer(offer: OfferItem): Promise<number>;

  updateOffer(offer: OfferItem): Promise<number>;

  deleteOffer(offer: OfferItem): Promise<boolean>;
}

// General storage using simple blob --> cordova storage handles all the rest
@Injectable({ providedIn: 'root' })
export class ImmoCapacitorStorage implements ImmoStorage {
  protected prefix = environment.storagePrefix;
  readonly offerKey = `${this.prefix}Offers`;

  constructor() {
    Storage.set({ key: this.offerKey, value: JSON.stringify([]) });
  }

  async getOffers(): Promise<OfferItem[]> {
    const result = await Storage.get({ key: this.offerKey });
    return JSON.parse(result.value);
  }

  async getOffer(id: number): Promise<OfferItem> {
    const result = await Storage.get({ key: this.offerKey });
    return JSON.parse(result.value).find(({ offerId }) => offerId == id);
  }

  async addOffer(offer: OfferItem): Promise<number> {
    const offers = await this.getOffers();
    offers.push(offer);
    Storage.set({ key: this.offerKey, value: JSON.stringify(offers) });
    return offers.length;
  }

  async updateOffer(offer: OfferItem): Promise<number> {
    const offers = (await this.getOffers()) as OfferItem[];
    let offeridx = offers.findIndex(({ offerId }) => offerId == offer.offerId);
    offers.splice(offeridx, 1, offer);
    Storage.set({ key: this.offerKey, value: JSON.stringify(offers) });
    return offeridx;
  }

  async deleteOffer(offer: OfferItem): Promise<boolean> {
    const offers = (await this.getOffers()) as OfferItem[];
    let offeridx = offers.findIndex(({ offerId }) => offerId == offer.offerId);
    offers.splice(offeridx, 1);
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class ImmoStoreService implements ImmoStorage {
  async getOffers(): Promise<OfferItem[]> {
    return [];
  }

  async addOffer(offer: OfferItem): Promise<number> {
    return 0;
  }

  async deleteOffer(offer: OfferItem): Promise<boolean> {
    return true;
  }

  async updateOffer(item: OfferItem) {
    return 0;
  }

  async getOffer(id: number): Promise<OfferItem> {
    return undefined;
  }
}

@Injectable()
export class ImmoStoreDexieService extends Dexie implements ImmoStorage {
  offers: Dexie.Table<OfferItem, number>;

  constructor() {
    super('ImmoDatabaseDexie', { autoOpen: true });
    this.version(1).stores({
      offers: 'offerId',
    });
    this.offers = this.table('offers');
  }

  async getOffers(): Promise<OfferItem[]> {
    return this.offers.toArray();
  }

  async getOffer(id: number): Promise<OfferItem> {
    return this.offers.get({ offerId: id });
  }

  async addOffer(offer: OfferItem): Promise<number> {
    console.log('offer update dexie', offer);
    const id = await this.offers.add(offer);
    return id;
  }

  async updateOffer(offer: OfferItem): Promise<number> {
    const id = await this.offers.update(offer.offerId, { images: offer.images });
    return id;
  }

  async deleteOffer(offer: OfferItem): Promise<boolean> {
    if (offer.offerId) {
      this.offers.delete(offer.offerId);
    }
    return true;
  }
}
