(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-fav-list-fav-list-module~pages-new-offer-new-offer-module~pages-offer~cb66719d"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button (click)=\"takePictureCapacitor()\">Take Capacitor Picture</ion-button>\n\n<ion-button (click)=\"initPictureProcess()\">Take Web Picture</ion-button>\n<div style=\"height: 0; width: 0; opacity: 0;\" hidden>\n  <input type=\"file\" id=\"pwaphoto\" #photoRef accept=\"image/x-png,image/jpeg\" (change)=\"handleInput()\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [pager]=\"true\" #slider>\n    <ion-slide *ngFor=\"let image of images\">\n        <ion-img [src]=\"image\"></ion-img>\n    </ion-slide>\n</ion-slides>\n<ng-container *ngIf=\"images && images.length\">\n    <ion-button fill=\"outline\" size=\"small\" color=\"tertiary\" (click)=\"slider.slidePrev()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"outline\" size=\"small\" color=\"tertiary\" (click)=\"slider.slideNext()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n<ion-row>\n  <ion-col size-xs=\"12\" size-md=\"6\" size-xl=\"4\" *ngFor=\"let item of items\">\n    <ion-card  [routerLink]=\"'/offer-details/' + item.offerId\">\n      <ion-img *ngIf=\"item.images\" [src]=\"item.images[0]\" alt=\"\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>{{item.address}}</ion-card-subtitle>\n        <ion-card-title>{{item.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{item.shortDescription}}\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-item-sliding *ngFor=\"let offer of items\">\n        <ion-item [routerLink]=\"'/offer-details/' + offer.offerId\">\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"offer.images[0]\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n                <h2 [innerHTML]=\"offer.title\"></h2>\n                <h3 [innerHTML]=\"offer.address\"></h3>\n                <p [innerHTML]=\"offer.shortDescription\"></p>\n            </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n            <ion-item-option (click)=\"mark(offer)\">\n                <ion-icon name=\"star\"></ion-icon>\n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n    <ion-tab-bar slot=\"top\" *ngIf=\"!mobile\">\n        <ng-content *ngTemplateOutlet=\"nav; context: {layout: 'icon-start'}\"></ng-content>\n    </ion-tab-bar>\n    <ion-tab-bar slot=\"bottom\" *ngIf=\"mobile\">\n        <ng-content *ngTemplateOutlet=\"nav; context: {layout: 'label-hide'}\"></ng-content>\n    </ion-tab-bar>\n</ion-tabs>\n\n\n<ng-template #nav let-layout=\"layout\">\n    <ion-tab-button tab=\"home\" [layout]=\"layout\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"search\" [layout]=\"layout\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"favourites\" [layout]=\"layout\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n        <ion-label>Favourites</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"new-offer\" [layout]=\"layout\">\n        <ion-icon name=\"medkit\"></ion-icon>\n        <ion-label>New Offer</ion-label>\n    </ion-tab-button>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/components/camera/camera.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/camera/camera.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/camera/camera.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/camera/camera.component.ts ***!
  \*******************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let CameraComponent = class CameraComponent {
    constructor(toasts) {
        this.toasts = toasts;
        this.capture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initPictureProcess() {
        this.photoInput.nativeElement.click();
    }
    handleInput() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const files = this.photoInput.nativeElement.files;
            if (!files && files.length <= 0) {
                return;
            }
            try {
                const base64Photo = yield this.convertBase64(files[0]);
                this.capture.emit(base64Photo);
            }
            catch (_a) {
                const toast = yield this.toasts.create({
                    message: 'Could not take picture',
                    duration: 2000,
                    color: 'warning',
                    translucent: true,
                });
                toast.present();
            }
        });
    }
    convertBase64(image) {
        if (!image) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(image);
        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    takePictureCapacitor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const cameraPermission = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Permissions"].query({ name: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["PermissionType"].Camera });
                console.log(cameraPermission);
            }
            catch (e) {
                console.log(e);
            }
            try {
                const image = yield Camera.getPhoto({
                    quality: 90,
                    allowEditing: true,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
                });
                const base64Image = image.base64String;
                this.capture.emit('data:image/jpeg;base64, ' + base64Image);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
CameraComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoRef', { static: true })
], CameraComponent.prototype, "photoInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CameraComponent.prototype, "capture", void 0);
CameraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./camera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./camera.component.scss */ "./src/app/components/camera/camera.component.scss")).default]
    })
], CameraComponent);



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GalleryComponent.prototype, "images", void 0);
GalleryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/components/item-grid/item-grid.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/item-grid/item-grid.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1ncmlkL2l0ZW0tZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/item-grid/item-grid.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/item-grid/item-grid.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemGridComponent", function() { return ItemGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favourites.service */ "./src/app/services/favourites.service.ts");




let ItemGridComponent = class ItemGridComponent {
    constructor(toast, favourites) {
        this.toast = toast;
        this.favourites = favourites;
    }
    mark(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = yield this.favourites.update(item);
            const toast = yield this.toast.create({
                message: `added #${item.offerId} ${id}to favourites`,
                duration: 1000,
                color: 'light',
                translucent: true,
            });
            toast.present();
        });
    }
};
ItemGridComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemGridComponent.prototype, "items", void 0);
ItemGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-grid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-grid.component.scss */ "./src/app/components/item-grid/item-grid.component.scss")).default]
    })
], ItemGridComponent);



/***/ }),

/***/ "./src/app/components/item-listing/item-listing.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/item-listing/item-listing.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1saXN0aW5nL2l0ZW0tbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/item-listing/item-listing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/item-listing/item-listing.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListingComponent", function() { return ItemListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favourites.service */ "./src/app/services/favourites.service.ts");




let ItemListingComponent = class ItemListingComponent {
    constructor(toast, favourites) {
        this.toast = toast;
        this.favourites = favourites;
    }
    mark(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = yield this.favourites.checkAndAdd(item);
            const message = `Added #${item.offerId} to favouites`;
            const toast = yield this.toast.create({
                message,
                duration: 1000,
                color: 'dark',
                translucent: false,
            });
            yield toast.present();
        });
    }
};
ItemListingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemListingComponent.prototype, "items", void 0);
ItemListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-listing.component.scss */ "./src/app/components/item-listing/item-listing.component.scss")).default]
    })
], ItemListingComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");





let NavigationComponent = class NavigationComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp(); // todo in service
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.mobile = this.platform.is('mobile') || this.platform.is('mobileweb');
        });
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/share.module.ts":
/*!********************************************!*\
  !*** ./src/app/components/share.module.ts ***!
  \********************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _item_listing_item_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-listing/item-listing.component */ "./src/app/components/item-listing/item-listing.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_grid_item_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-grid/item-grid.component */ "./src/app/components/item-grid/item-grid.component.ts");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/components/camera/camera.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");










const ALL_COMPONENTS = [
    _item_listing_item_listing_component__WEBPACK_IMPORTED_MODULE_2__["ItemListingComponent"],
    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
    _item_grid_item_grid_component__WEBPACK_IMPORTED_MODULE_7__["ItemGridComponent"],
    _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__["CameraComponent"],
    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]
];
let ShareModule = class ShareModule {
};
ShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: ALL_COMPONENTS,
        exports: ALL_COMPONENTS,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ],
    })
], ShareModule);



/***/ }),

/***/ "./src/app/services/favourites.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/favourites.service.ts ***!
  \************************************************/
/*! exports provided: FavouritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesService", function() { return FavouritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _immo_store_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immo-store-web.service */ "./src/app/services/immo-store-web.service.ts");



let FavouritesService = class FavouritesService {
    constructor(immoStore) {
        this.immoStore = immoStore;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.immoStore.getOffers();
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.immoStore.getOffer(id);
            return item;
        });
    }
    update(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.immoStore.addOffer(item);
        });
    }
    checkAndAdd(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const existingOffer = yield this.immoStore.getOffer(item.offerId);
            if (!existingOffer) {
                return this.immoStore.addOffer(item);
            }
            else {
                return this.immoStore.updateOffer(item);
            }
        });
    }
};
FavouritesService.ctorParameters = () => [
    { type: _immo_store_web_service__WEBPACK_IMPORTED_MODULE_2__["ImmoStoreService"] }
];
FavouritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], FavouritesService);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-fav-list-fav-list-module~pages-new-offer-new-offer-module~pages-offer~cb66719d-es2015.js.map