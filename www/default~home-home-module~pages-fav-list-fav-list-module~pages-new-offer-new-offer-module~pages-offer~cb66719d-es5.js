function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-fav-list-fav-list-module~pages-new-offer-new-offer-module~pages-offer~cb66719d"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCameraCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button (click)=\"takePictureCapacitor()\">Take Capacitor Picture</ion-button>\n\n<ion-button (click)=\"initPictureProcess()\">Take Web Picture</ion-button>\n<div style=\"height: 0; width: 0; opacity: 0;\" hidden>\n  <input type=\"file\" id=\"pwaphoto\" #photoRef accept=\"image/x-png,image/jpeg\" (change)=\"handleInput()\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides [pager]=\"true\" #slider>\n    <ion-slide *ngFor=\"let image of images\">\n        <ion-img [src]=\"image\"></ion-img>\n    </ion-slide>\n</ion-slides>\n<ng-container *ngIf=\"images && images.length\">\n    <ion-button fill=\"outline\" size=\"small\" color=\"tertiary\" (click)=\"slider.slidePrev()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"outline\" size=\"small\" color=\"tertiary\" (click)=\"slider.slideNext()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemGridItemGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid>\n<ion-row>\n  <ion-col size-xs=\"12\" size-md=\"6\" size-xl=\"4\" *ngFor=\"let item of items\">\n    <ion-card  [routerLink]=\"'/offer-details/' + item.offerId\">\n      <ion-img *ngIf=\"item.images\" [src]=\"item.images[0]\" alt=\"\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>{{item.address}}</ion-card-subtitle>\n        <ion-card-title>{{item.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{item.shortDescription}}\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemListingItemListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n    <ion-item-sliding *ngFor=\"let offer of items\">\n        <ion-item [routerLink]=\"'/offer-details/' + offer.offerId\">\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"offer.images[0]\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n                <h2 [innerHTML]=\"offer.title\"></h2>\n                <h3 [innerHTML]=\"offer.address\"></h3>\n                <p [innerHTML]=\"offer.shortDescription\"></p>\n            </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n            <ion-item-option (click)=\"mark(offer)\">\n                <ion-icon name=\"star\"></ion-icon>\n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n    <ion-tab-bar slot=\"top\" *ngIf=\"!mobile\">\n        <ng-content *ngTemplateOutlet=\"nav; context: {layout: 'icon-start'}\"></ng-content>\n    </ion-tab-bar>\n    <ion-tab-bar slot=\"bottom\" *ngIf=\"mobile\">\n        <ng-content *ngTemplateOutlet=\"nav; context: {layout: 'label-hide'}\"></ng-content>\n    </ion-tab-bar>\n</ion-tabs>\n\n\n<ng-template #nav let-layout=\"layout\">\n    <ion-tab-button tab=\"home\" [layout]=\"layout\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"search\" [layout]=\"layout\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"favourites\" [layout]=\"layout\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n        <ion-label>Favourites</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"new-offer\" [layout]=\"layout\">\n        <ion-icon name=\"medkit\"></ion-icon>\n        <ion-label>New Offer</ion-label>\n    </ion-tab-button>\n</ng-template>\n";
    /***/
  },

  /***/
  "./src/app/components/camera/camera.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/camera/camera.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCameraCameraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/camera/camera.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/camera/camera.component.ts ***!
    \*******************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppComponentsCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
      return CameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera;

    var CameraComponent = /*#__PURE__*/function () {
      function CameraComponent(toasts) {
        _classCallCheck(this, CameraComponent);

        this.toasts = toasts;
        this.capture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CameraComponent, [{
        key: "initPictureProcess",
        value: function initPictureProcess() {
          this.photoInput.nativeElement.click();
        }
      }, {
        key: "handleInput",
        value: function handleInput() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var files, base64Photo, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    files = this.photoInput.nativeElement.files;

                    if (!(!files && files.length <= 0)) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    _context.prev = 3;
                    _context.next = 6;
                    return this.convertBase64(files[0]);

                  case 6:
                    base64Photo = _context.sent;
                    this.capture.emit(base64Photo);
                    _context.next = 16;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](3);
                    _context.next = 14;
                    return this.toasts.create({
                      message: 'Could not take picture',
                      duration: 2000,
                      color: 'warning',
                      translucent: true
                    });

                  case 14:
                    toast = _context.sent;
                    toast.present();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[3, 10]]);
          }));
        }
      }, {
        key: "convertBase64",
        value: function convertBase64(image) {
          if (!image) {
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(image);
          return new Promise(function (resolve, reject) {
            reader.onload = function () {
              return resolve(reader.result);
            };

            reader.onerror = function (error) {
              return reject(error);
            };
          });
        }
      }, {
        key: "takePictureCapacitor",
        value: function takePictureCapacitor() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var cameraPermission, image, base64Image;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Permissions"].query({
                      name: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["PermissionType"].Camera
                    });

                  case 3:
                    cameraPermission = _context2.sent;
                    console.log(cameraPermission);
                    _context2.next = 10;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    console.log(_context2.t0);

                  case 10:
                    _context2.prev = 10;
                    _context2.next = 13;
                    return Camera.getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64
                    });

                  case 13:
                    image = _context2.sent;
                    base64Image = image.base64String;
                    this.capture.emit('data:image/jpeg;base64, ' + base64Image);
                    _context2.next = 21;
                    break;

                  case 18:
                    _context2.prev = 18;
                    _context2.t1 = _context2["catch"](10);
                    console.error(_context2.t1);

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 7], [10, 18]]);
          }));
        }
      }]);

      return CameraComponent;
    }();

    CameraComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoRef', {
      "static": true
    })], CameraComponent.prototype, "photoInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CameraComponent.prototype, "capture", void 0);
    CameraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/camera/camera.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./camera.component.scss */
      "./src/app/components/camera/camera.component.scss"))["default"]]
    })], CameraComponent);
    /***/
  },

  /***/
  "./src/app/components/gallery/gallery.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/gallery/gallery.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGalleryGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/gallery/gallery.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/gallery/gallery.component.ts ***!
    \*********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent = function GalleryComponent() {
      _classCallCheck(this, GalleryComponent);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gallery.component.scss */
      "./src/app/components/gallery/gallery.component.scss"))["default"]]
    })], GalleryComponent);
    /***/
  },

  /***/
  "./src/app/components/item-grid/item-grid.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/item-grid/item-grid.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsItemGridItemGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1ncmlkL2l0ZW0tZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/item-grid/item-grid.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/item-grid/item-grid.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemGridComponent */

  /***/
  function srcAppComponentsItemGridItemGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemGridComponent", function () {
      return ItemGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/favourites.service */
    "./src/app/services/favourites.service.ts");

    var ItemGridComponent = /*#__PURE__*/function () {
      function ItemGridComponent(toast, favourites) {
        _classCallCheck(this, ItemGridComponent);

        this.toast = toast;
        this.favourites = favourites;
      }

      _createClass(ItemGridComponent, [{
        key: "mark",
        value: function mark(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var id, toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.favourites.update(item);

                  case 2:
                    id = _context3.sent;
                    _context3.next = 5;
                    return this.toast.create({
                      message: "added #".concat(item.offerId, " ").concat(id, "to favourites"),
                      duration: 1000,
                      color: 'light',
                      translucent: true
                    });

                  case 5:
                    toast = _context3.sent;
                    toast.present();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ItemGridComponent;
    }();

    ItemGridComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemGridComponent.prototype, "items", void 0);
    ItemGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-grid',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-grid/item-grid.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-grid.component.scss */
      "./src/app/components/item-grid/item-grid.component.scss"))["default"]]
    })], ItemGridComponent);
    /***/
  },

  /***/
  "./src/app/components/item-listing/item-listing.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/item-listing/item-listing.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsItemListingItemListingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1saXN0aW5nL2l0ZW0tbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/item-listing/item-listing.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/item-listing/item-listing.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ItemListingComponent */

  /***/
  function srcAppComponentsItemListingItemListingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListingComponent", function () {
      return ItemListingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/favourites.service */
    "./src/app/services/favourites.service.ts");

    var ItemListingComponent = /*#__PURE__*/function () {
      function ItemListingComponent(toast, favourites) {
        _classCallCheck(this, ItemListingComponent);

        this.toast = toast;
        this.favourites = favourites;
      }

      _createClass(ItemListingComponent, [{
        key: "mark",
        value: function mark(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var id, message, toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.favourites.checkAndAdd(item);

                  case 2:
                    id = _context4.sent;
                    message = "Added #".concat(item.offerId, " to favouites");
                    _context4.next = 6;
                    return this.toast.create({
                      message: message,
                      duration: 1000,
                      color: 'dark',
                      translucent: false
                    });

                  case 6:
                    toast = _context4.sent;
                    _context4.next = 9;
                    return toast.present();

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ItemListingComponent;
    }();

    ItemListingComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemListingComponent.prototype, "items", void 0);
    ItemListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-listing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-listing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-listing/item-listing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-listing.component.scss */
      "./src/app/components/item-listing/item-listing.component.scss"))["default"]]
    })], ItemListingComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, NavigationComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp(); // todo in service
      }

      _createClass(NavigationComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.mobile = _this.platform.is('mobile') || _this.platform.is('mobileweb');
          });
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/components/navigation/navigation.component.scss"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/share.module.ts":
  /*!********************************************!*\
    !*** ./src/app/components/share.module.ts ***!
    \********************************************/

  /*! exports provided: ShareModule */

  /***/
  function srcAppComponentsShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
      return ShareModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _item_listing_item_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./item-listing/item-listing.component */
    "./src/app/components/item-listing/item-listing.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_grid_item_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-grid/item-grid.component */
    "./src/app/components/item-grid/item-grid.component.ts");
    /* harmony import */


    var _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./camera/camera.component */
    "./src/app/components/camera/camera.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");

    var ALL_COMPONENTS = [_item_listing_item_listing_component__WEBPACK_IMPORTED_MODULE_2__["ItemListingComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _item_grid_item_grid_component__WEBPACK_IMPORTED_MODULE_7__["ItemGridComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__["CameraComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]];

    var ShareModule = function ShareModule() {
      _classCallCheck(this, ShareModule);
    };

    ShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: ALL_COMPONENTS,
      exports: ALL_COMPONENTS,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], ShareModule);
    /***/
  },

  /***/
  "./src/app/services/favourites.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/favourites.service.ts ***!
    \************************************************/

  /*! exports provided: FavouritesService */

  /***/
  function srcAppServicesFavouritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesService", function () {
      return FavouritesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _immo_store_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./immo-store-web.service */
    "./src/app/services/immo-store-web.service.ts");

    var FavouritesService = /*#__PURE__*/function () {
      function FavouritesService(immoStore) {
        _classCallCheck(this, FavouritesService);

        this.immoStore = immoStore;
      }

      _createClass(FavouritesService, [{
        key: "getAll",
        value: function getAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.immoStore.getOffers();

                  case 2:
                    return _context5.abrupt("return", _context5.sent);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "get",
        value: function get(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var item;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.immoStore.getOffer(id);

                  case 2:
                    item = _context6.sent;
                    return _context6.abrupt("return", item);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "update",
        value: function update(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", this.immoStore.addOffer(item));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "checkAndAdd",
        value: function checkAndAdd(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var existingOffer;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.immoStore.getOffer(item.offerId);

                  case 2:
                    existingOffer = _context8.sent;

                    if (existingOffer) {
                      _context8.next = 7;
                      break;
                    }

                    return _context8.abrupt("return", this.immoStore.addOffer(item));

                  case 7:
                    return _context8.abrupt("return", this.immoStore.updateOffer(item));

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return FavouritesService;
    }();

    FavouritesService.ctorParameters = function () {
      return [{
        type: _immo_store_web_service__WEBPACK_IMPORTED_MODULE_2__["ImmoStoreService"]
      }];
    };

    FavouritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FavouritesService);
    /***/
  }
}]);
//# sourceMappingURL=default~home-home-module~pages-fav-list-fav-list-module~pages-new-offer-new-offer-module~pages-offer~cb66719d-es5.js.map