import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { fromEvent, merge, Subject } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.scss' ],
})
export class AppComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<boolean>();
    public mobile: boolean;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.mobile = this.platform.is('mobile') || this.platform.is('mobileweb');

        });
    }

    ngOnInit() {
        this.listenNetwork()
    }


    ngOnDestroy() {
        this.destroy$.next(true);
    }

    private listenNetwork() {
        const online$ = fromEvent(window, 'online').pipe(mapTo(true));
        const offline$ = fromEvent(window, 'offline').pipe(mapTo(false));
        merge(online$, offline$).pipe(takeUntil(this.destroy$)).subscribe(isOnline => console.log({ isOnline }));
    }
}
