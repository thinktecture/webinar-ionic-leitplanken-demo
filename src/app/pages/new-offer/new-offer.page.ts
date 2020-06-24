import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { FormBuilder, Validators } from '@angular/forms';
import { FavouritesService } from 'src/app/services/favourites.service';
import { OfferItem } from 'src/app/services/item.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-offer',
    templateUrl: './new-offer.page.html',
    styleUrls: [ './new-offer.page.scss' ],
})
export class NewOfferPage implements OnInit {

    form = this.fb.group({
        title: [ '', [ Validators.required ] ],
        address: [ '', [ Validators.required ] ],
        shortDescription: [ '', [ Validators.required ] ],
        date: [ '', [ Validators.required ] ],
    });
    images: string[] = [];

    constructor(
        private readonly faio: FingerprintAIO,
        private readonly fb: FormBuilder,
        private readonly favourites: FavouritesService,
        private readonly toast: ToastController,
        private readonly router: Router,
    ) {
    }

    async ngOnInit() {
        try {
            if (!await this.faio.isAvailable()) {
                console.warn('Biometric authentication not available');
            } else {
                const result = await this.faio.show({
                        title: 'Face ID and Fingerprint authentication',
                        description: 'please authenticate',
                        disableBackup: true,
                    },
                )
            }
        } catch (e) {
            console.error('authentication failed', e);
            this.router.navigate([ '/' ]);
        }
    }

    async onCapture($event: string) {
        this.images.push($event);
    }

    async submit() {
        const item = {
            ...this.form.value,
            offerId: 1000 + Math.floor(Math.random() * 1000),
            images: this.images,
        } as OfferItem;
        this.favourites.checkAndAdd(item);

        const toast = await this.toast.create({
            translucent: false,
            color: 'dark',
            message: 'Added new Offer to Favourites',
            buttons: [
                {
                    text: 'Open',
                    handler: () => {
                        this.router.navigate([ 'offer-details/' + item.offerId ])
                    },
                },
            ],
        });
        await toast.present();

        this.form.reset();
        this.images.length = 0;
    }
}
