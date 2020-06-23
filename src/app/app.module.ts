import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImmoCapacitorStorage, ImmoStoreDexieService, ImmoStoreService } from './services/immo-store-web.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
    declarations: [ AppComponent ],
    entryComponents: [],
    imports: [ BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',

        }),
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: ImmoStoreService, useClass: ImmoStoreDexieService },
        // { provide: ImmoStoreService, useClass: ImmoCapacitorStorage },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
