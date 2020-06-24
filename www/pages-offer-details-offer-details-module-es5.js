function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offer-details-offer-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offer-details/offer-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offer-details/offer-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOfferDetailsOfferDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [defaultHref]=\"'/'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{item?.title}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n    <ion-header collapse=\"condense\" translucent=\"true\">\n        <ion-toolbar>\n            <ion-title size=\"large\">{{item?.title}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-md=\"6\" size-xl=\"6\">\n               <app-gallery [images]=\"item?.images\"></app-gallery>\n            </ion-col>\n            <ion-col size-sm=\"12\" size-md=\"6\">\n                <ion-text color=\"dark\">\n                    <h2>\n                        {{item?.shortDescription}}\n                    </h2>\n                </ion-text>\n                <p *ngIf=\"item && item.date\">{{item.date}}</p>\n                <p>{{item?.address}}</p>\n                <p>Offer: #{{item?.offerId}}</p>\n                <hr/>\n                <ion-item>\n                    <app-camera (capture)=\"onCapture($event)\"></app-camera>\n                </ion-item>\n                <ion-item>\n                    <ion-button (click)=\"share()\">Tell a friend</ion-button>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/offer-details/offer-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/offer-details/offer-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OfferDetailsPageRoutingModule */

  /***/
  function srcAppPagesOfferDetailsOfferDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferDetailsPageRoutingModule", function () {
      return OfferDetailsPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _offer_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offer-details.page */
    "./src/app/pages/offer-details/offer-details.page.ts");

    var routes = [{
      path: ':id',
      component: _offer_details_page__WEBPACK_IMPORTED_MODULE_3__["OfferDetailsPage"]
    }];

    var OfferDetailsPageRoutingModule = function OfferDetailsPageRoutingModule() {
      _classCallCheck(this, OfferDetailsPageRoutingModule);
    };

    OfferDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OfferDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/offer-details/offer-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/offer-details/offer-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: OfferDetailsPageModule */

  /***/
  function srcAppPagesOfferDetailsOfferDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferDetailsPageModule", function () {
      return OfferDetailsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _offer_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offer-details-routing.module */
    "./src/app/pages/offer-details/offer-details-routing.module.ts");
    /* harmony import */


    var _offer_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offer-details.page */
    "./src/app/pages/offer-details/offer-details.page.ts");
    /* harmony import */


    var _components_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/share.module */
    "./src/app/components/share.module.ts");

    var OfferDetailsPageModule = function OfferDetailsPageModule() {
      _classCallCheck(this, OfferDetailsPageModule);
    };

    OfferDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offer_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferDetailsPageRoutingModule"], _components_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]],
      declarations: [_offer_details_page__WEBPACK_IMPORTED_MODULE_6__["OfferDetailsPage"]]
    })], OfferDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/offer-details/offer-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/offer-details/offer-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOfferDetailsOfferDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".gridl {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  grid-gap: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhzY2h1bHRlL3Byb2plY3RzL1RUL2RlbW9zL3R0LWlvbmljLWltbW8vc3JjL2FwcC9wYWdlcy9vZmZlci1kZXRhaWxzL29mZmVyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vZmZlci1kZXRhaWxzL29mZmVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2ZmZXItZGV0YWlscy9vZmZlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC1nYXA6IC4zcmVtO1xufVxuIiwiLmdyaWRsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLWdhcDogMC4zcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/offer-details/offer-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/offer-details/offer-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: OfferDetailsPage */

  /***/
  function srcAppPagesOfferDetailsOfferDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferDetailsPage", function () {
      return OfferDetailsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/favourites.service */
    "./src/app/services/favourites.service.ts");

    var OfferDetailsPage = /*#__PURE__*/function () {
      function OfferDetailsPage(acr, items, favourites) {
        _classCallCheck(this, OfferDetailsPage);

        this.acr = acr;
        this.items = items;
        this.favourites = favourites;
      }

      _createClass(OfferDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var id;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    id = this.acr.snapshot.params.id;
                    _context.next = 3;
                    return this.favourites.get(Number.parseInt(id, 10));

                  case 3:
                    this.item = _context.sent;

                    if (this.item) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 7;
                    return this.items.get(id);

                  case 7:
                    this.item = _context.sent;

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onCapture",
        value: function onCapture($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.item.images) {
                      this.item.images = [];
                    }

                    this.item.images.push($event);
                    this.updateItemStore();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateItemStore",
        value: function updateItemStore() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.favourites.checkAndAdd(this.item);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "share",
        value: function share() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return navigator.share({
                      title: 'title',
                      url: window.location.toString(),
                      text: 'sharing some text'
                    });

                  case 3:
                    _context4.next = 8;
                    break;

                  case 5:
                    _context4.prev = 5;
                    _context4.t0 = _context4["catch"](0);

                    /*
                       This error will appear if the user canceled the action of sharing.
                     */
                    alert("Couldn't share ".concat(_context4.t0));

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 5]]);
          }));
        }
      }]);

      return OfferDetailsPage;
    }();

    OfferDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemSerivce"]
      }, {
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]
      }];
    };

    OfferDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./offer-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offer-details/offer-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./offer-details.page.scss */
      "./src/app/pages/offer-details/offer-details.page.scss"))["default"]]
    })], OfferDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-offer-details-offer-details-module-es5.js.map