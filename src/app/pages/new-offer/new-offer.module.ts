import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOfferPageRoutingModule } from './new-offer-routing.module';

import { NewOfferPage } from './new-offer.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ShareModule } from '../../components/share.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewOfferPageRoutingModule,
        ReactiveFormsModule,
        ShareModule,
    ],
    providers: [
        FingerprintAIO,
    ],
    declarations: [ NewOfferPage ],
})
export class NewOfferPageModule {
}
