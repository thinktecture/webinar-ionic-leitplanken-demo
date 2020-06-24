function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-offer-new-offer-module"], {
  /***/
  "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js ***!
    \******************************************************************************/

  /*! exports provided: FingerprintAIO */

  /***/
  function node_modulesIonicNativeFingerprintAio__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingerprintAIO", function () {
      return FingerprintAIO;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var FingerprintAIO =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FingerprintAIO, _super);

      function FingerprintAIO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */


        _this.BIOMETRIC_UNKNOWN_ERROR = -100;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_UNAVAILABLE = -101;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_NOT_ENROLLED = -106;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_DISMISSED = -108;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_LOCKED_OUT = -111;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
        return _this;
      }

      FingerprintAIO.prototype.isAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isAvailable", {}, arguments);
      };

      FingerprintAIO.prototype.show = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {}, arguments);
      };

      FingerprintAIO.pluginName = "FingerprintAIO";
      FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
      FingerprintAIO.pluginRef = "Fingerprint";
      FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
      FingerprintAIO.platforms = ["Android", "iOS"];

      FingerprintAIO.ɵfac = function FingerprintAIO_Factory(t) {
        return ɵFingerprintAIO_BaseFactory(t || FingerprintAIO);
      };

      FingerprintAIO.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FingerprintAIO,
        factory: function factory(t) {
          return FingerprintAIO.ɵfac(t);
        }
      });

      var ɵFingerprintAIO_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FingerprintAIO);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerprintAIO, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return FingerprintAIO;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdXLElBNkV5QixrQ0FBaUI7QUFBQztBQUU5QjtBQUtkLFFBTlI7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsNkJBQXVCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDakMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMvQixRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ3pDLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsaUNBQTJCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzFDLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsNEJBQXNCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN6QyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzdCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsd0NBQWtDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDNUMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzlCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsb0NBQThCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDeEM7QUFFZTtBQUFNLElBSW5CLG9DQUFXO0FBS2lCLElBSzVCLDZCQUFJLGFBQUMsT0FBMkI7QUFJbEI7QUFBa0Q7QUFBOEQ7QUFBOEM7QUFBMEY7SUF0RjNQLGNBQWMsd0JBRDFCLFVBQVUsRUFBRSxRQUNBLGNBQWM7Ozs7OzBCQUFFO0FBQUMseUJBbEY5QjtBQUFFLEVBa0ZrQyxpQkFBaUI7QUFDcEQsU0FEWSxjQUFjO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogVGl0bGUgaW4gYmlvbWV0cmljIHByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKiBAZGVmYXVsdCB7QVBQX05BTUV9IEJpb21ldHJpYyBTaWduIE9uXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3VidGl0bGUgaW4gYmlvbWV0cmljIFByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBzdWJ0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gaW4gYmlvbWV0cmljIFByb21wdFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgb2YgZmFsbGJhY2sgYnV0dG9uLlxuICAgKiBAZGVmYXVsdCBcIlVzZSBQaW5cIlxuICAgKi9cbiAgZmFsbGJhY2tCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgZm9yIGNhbmNlbCBidXR0b24gb24gQW5kcm9pZFxuICAgKiBAZGVmYXVsdCBcIkNhbmNlbFwiXG4gICAqL1xuICBjYW5jZWxCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGlzYWJsZSAndXNlIGJhY2t1cCcgb3B0aW9uLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgRmluZ2VycHJpbnQgQUlPXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSBzaW1wbGUgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gb24gQW5kcm9pZCBhbmQgaU9TLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpby4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpb1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmluZ2VycHJpbnRBSU8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbmdlcnByaW50LWFpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFpbzogRmluZ2VycHJpbnRBSU8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5zaG93KCkudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqICBPUiB3aXRoIG9wdGlvbnMuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdyh7XG4gKiAgICAgdGl0bGU6ICdCaW9tZXRyaWMgQXV0aGVudGljYXRpb24nLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogXCI8QVBQX05BTUU+IEJpb21ldHJpYyBTaWduIE9uXCJcbiAqICAgICBzdWJ0aXRsZTogJ0Nvb2xlc3QgUGx1Z2luIGV2ZXInIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgYXV0aGVudGljYXRlJyAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICBmYWxsYmFja0J1dHRvblRpdGxlOiAnVXNlIEJhY2t1cCcsIC8vIG9wdGlvbmFsIHwgV2hlbiBkaXNhYmxlQmFja3VwIGlzIGZhbHNlIGRlZmF1bHRzIHRvIFwiVXNlIFBpblwiLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkaXNhYmxlQmFja3VwIGlzIHRydWUgZGVmYXVsdHMgdG8gXCJDYW5jZWxcIlxuICogICAgIGRpc2FibGVCYWNrdXA6dHJ1ZSwgIC8vIG9wdGlvbmFsIHwgZGVmYXVsdDogZmFsc2VcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRmluZ2VycHJpbnRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZ2VycHJpbnRBSU8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1VOS05PV05fRVJST1IgPSAtMTAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTkFWQUlMQUJMRSA9IC0xMDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0FVVEhFTlRJQ0FUSU9OX0ZBSUxFRCA9IC0xMDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NES19OT1RfU1VQUE9SVEVEID0gLTEwMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSEFSRFdBUkVfTk9UX1NVUFBPUlRFRCA9IC0xMDQ7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1BFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAtMTA1O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19OT1RfRU5ST0xMRUQgPSAtMTA2O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19JTlRFUk5BTF9QTFVHSU5fRVJST1IgPSAtMTA3O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19ESVNNSVNTRUQgPSAtMTA4O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QSU5fT1JfUEFUVEVSTl9ESVNNSVNTRUQgPSAtMTA5O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TQ1JFRU5fR1VBUkRfVU5TRUNVUkVEID0gLTExMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTE9DS0VEX09VVCA9IC0xMTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVRfUEVSTUFORU5UID0gLTExMjtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gaXMgYXZhaWxhYmxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZVxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-offer/new-offer.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-offer/new-offer.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewOfferNewOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [defaultHref]=\"'/'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>New Favourite</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n    <ion-header collapse=\"condense\" translucent=\"true\">\n        <ion-toolbar>\n            <ion-title size=\"large\">New Favourite</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-md=\"6\" size-xl=\"6\">\n                <app-gallery [images]=\"images\"></app-gallery>\n                <hr>\n                <app-camera (capture)=\"onCapture($event)\"></app-camera>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-md=\"6\" size-xl=\"6\">\n                <form [formGroup]=\"form\">\n                    <ion-item>\n                        <ion-label position=\"floating\">Title <ion-text color=\"danger\">*</ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"title\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Address<ion-text color=\"danger\">*</ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"address\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">\n                            Short Description\n                            <ion-text color=\"danger\">*</ion-text>\n                        </ion-label>\n                        <ion-textarea formControlName=\"shortDescription\"></ion-textarea>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Date</ion-label>\n                        <ion-datetime formControlName=\"date\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Draft</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n\n<ion-button [disabled]=\"form.invalid\" (click)=\"submit()\">Add Favourite</ion-button>\n";
    /***/
  },

  /***/
  "./src/app/pages/new-offer/new-offer-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/new-offer/new-offer-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NewOfferPageRoutingModule */

  /***/
  function srcAppPagesNewOfferNewOfferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageRoutingModule", function () {
      return NewOfferPageRoutingModule;
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


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/pages/new-offer/new-offer.page.ts");

    var routes = [{
      path: '',
      component: _new_offer_page__WEBPACK_IMPORTED_MODULE_3__["NewOfferPage"]
    }];

    var NewOfferPageRoutingModule = function NewOfferPageRoutingModule() {
      _classCallCheck(this, NewOfferPageRoutingModule);
    };

    NewOfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewOfferPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/new-offer/new-offer.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/new-offer/new-offer.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewOfferPageModule */

  /***/
  function srcAppPagesNewOfferNewOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function () {
      return NewOfferPageModule;
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


    var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-offer-routing.module */
    "./src/app/pages/new-offer/new-offer-routing.module.ts");
    /* harmony import */


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/pages/new-offer/new-offer.page.ts");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/share.module */
    "./src/app/components/share.module.ts");

    var NewOfferPageModule = function NewOfferPageModule() {
      _classCallCheck(this, NewOfferPageModule);
    };

    NewOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewOfferPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      providers: [_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__["FingerprintAIO"]],
      declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
    })], NewOfferPageModule);
    /***/
  },

  /***/
  "./src/app/pages/new-offer/new-offer.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/new-offer/new-offer.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewOfferNewOfferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1vZmZlci9uZXctb2ZmZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/new-offer/new-offer.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/new-offer/new-offer.page.ts ***!
    \***************************************************/

  /*! exports provided: NewOfferPage */

  /***/
  function srcAppPagesNewOfferNewOfferPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPage", function () {
      return NewOfferPage;
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


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_favourites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/favourites.service */
    "./src/app/services/favourites.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewOfferPage = /*#__PURE__*/function () {
      function NewOfferPage(faio, fb, favourites, toast, router) {
        _classCallCheck(this, NewOfferPage);

        this.faio = faio;
        this.fb = fb;
        this.favourites = favourites;
        this.toast = toast;
        this.router = router;
        this.form = this.fb.group({
          title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          shortDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.images = [];
      }

      _createClass(NewOfferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.faio.isAvailable();

                  case 3:
                    if (_context.sent) {
                      _context.next = 7;
                      break;
                    }

                    console.warn('Biometric authentication not available');
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return this.faio.show({
                      title: 'Face ID and Fingerprint authentication',
                      description: 'please authenticate',
                      disableBackup: true
                    });

                  case 9:
                    result = _context.sent;

                  case 10:
                    _context.next = 16;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](0);
                    console.error('authentication failed', _context.t0);
                    this.router.navigate(['/']);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 12]]);
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
                    this.images.push($event);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var item, toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    item = Object.assign(Object.assign({}, this.form.value), {
                      offerId: 1000 + Math.floor(Math.random() * 1000)
                    });
                    this.favourites.checkAndAdd(item);
                    _context3.next = 4;
                    return this.toast.create({
                      translucent: false,
                      color: 'dark',
                      message: 'Added new Offer to Favourites',
                      buttons: [{
                        text: 'Open',
                        handler: function handler() {
                          _this2.router.navigate(['offer-details/' + item.offerId]);
                        }
                      }]
                    });

                  case 4:
                    toast = _context3.sent;
                    _context3.next = 7;
                    return toast.present();

                  case 7:
                    this.form.reset();
                    this.images.length = 0;

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return NewOfferPage;
    }();

    NewOfferPage.ctorParameters = function () {
      return [{
        type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__["FingerprintAIO"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    NewOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-offer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-offer/new-offer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-offer.page.scss */
      "./src/app/pages/new-offer/new-offer.page.scss"))["default"]]
    })], NewOfferPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-new-offer-new-offer-module-es5.js.map