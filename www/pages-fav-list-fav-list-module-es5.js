function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fav-list-fav-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fav-list/fav-list.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fav-list/fav-list.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFavListFavListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar fixed>\n        <ion-title>Favourite Offers</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar fixed>\n            <ion-title size=\"large\">Favourites</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-grid fixed>\n    <app-item-grid [items]=\"items$ | async\"></app-item-grid>\n    </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fav-list/fav-list-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/fav-list/fav-list-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FavListPageRoutingModule */

  /***/
  function srcAppPagesFavListFavListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavListPageRoutingModule", function () {
      return FavListPageRoutingModule;
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


    var _fav_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fav-list.page */
    "./src/app/pages/fav-list/fav-list.page.ts");

    var routes = [{
      path: '',
      component: _fav_list_page__WEBPACK_IMPORTED_MODULE_3__["FavListPage"]
    }];

    var FavListPageRoutingModule = function FavListPageRoutingModule() {
      _classCallCheck(this, FavListPageRoutingModule);
    };

    FavListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fav-list/fav-list.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/fav-list/fav-list.module.ts ***!
    \***************************************************/

  /*! exports provided: FavListPageModule */

  /***/
  function srcAppPagesFavListFavListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavListPageModule", function () {
      return FavListPageModule;
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


    var _fav_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fav-list-routing.module */
    "./src/app/pages/fav-list/fav-list-routing.module.ts");
    /* harmony import */


    var _fav_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fav-list.page */
    "./src/app/pages/fav-list/fav-list.page.ts");
    /* harmony import */


    var _components_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/share.module */
    "./src/app/components/share.module.ts");

    var FavListPageModule = function FavListPageModule() {
      _classCallCheck(this, FavListPageModule);
    };

    FavListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fav_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavListPageRoutingModule"], _components_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]],
      declarations: [_fav_list_page__WEBPACK_IMPORTED_MODULE_6__["FavListPage"]]
    })], FavListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fav-list/fav-list.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/fav-list/fav-list.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFavListFavListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdi1saXN0L2Zhdi1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/fav-list/fav-list.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/fav-list/fav-list.page.ts ***!
    \*************************************************/

  /*! exports provided: FavListPage */

  /***/
  function srcAppPagesFavListFavListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavListPage", function () {
      return FavListPage;
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


    var _services_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/favourites.service */
    "./src/app/services/favourites.service.ts");

    var FavListPage = /*#__PURE__*/function () {
      function FavListPage(favourites) {
        _classCallCheck(this, FavListPage);

        this.favourites = favourites;
      }

      _createClass(FavListPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.ngOnInit();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.items$ = this.favourites.getAll();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return FavListPage;
    }();

    FavListPage.ctorParameters = function () {
      return [{
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_2__["FavouritesService"]
      }];
    };

    FavListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fav-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fav-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fav-list/fav-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./fav-list.page.scss */
      "./src/app/pages/fav-list/fav-list.page.scss"))["default"]]
    })], FavListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-fav-list-fav-list-module-es5.js.map