// "use strict";
// // import { Component, VERSION, ViewEncapsulation } from "@angular/core";
// // import lgZoom from 'lightgallery/plugins/zoom';
// // import { BeforeSlideDetail } from 'lightgallery/lg-events';
// var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
//     function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
//     var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
//     var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
//     var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
//     var _, done = false;
//     for (var i = decorators.length - 1; i >= 0; i--) {
//         var context = {};
//         for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
//         for (var p in contextIn.access) context.access[p] = contextIn.access[p];
//         context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
//         var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
//         if (kind === "accessor") {
//             if (result === void 0) continue;
//             if (result === null || typeof result !== "object") throw new TypeError("Object expected");
//             if (_ = accept(result.get)) descriptor.get = _;
//             if (_ = accept(result.set)) descriptor.set = _;
//             if (_ = accept(result.init)) initializers.unshift(_);
//         }
//         else if (_ = accept(result)) {
//             if (kind === "field") initializers.unshift(_);
//             else descriptor[key] = _;
//         }
//     }
//     if (target) Object.defineProperty(target, contextIn.name, descriptor);
//     done = true;
// };
// var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
//     var useValue = arguments.length > 2;
//     for (var i = 0; i < initializers.length; i++) {
//         value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
//     }
//     return useValue ? value : void 0;
// };
// var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
//     if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
//     return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.GalleryPageComponent = void 0;
// // @Component({
// //   selector: 'app-gallery',
// //   templateUrl: './gallery.component.html',
// //   styleUrls: ['./Gallery.component.css'],
// //   encapsulation: ViewEncapsulation.None
// // })
// // export class GalleryPageComponent {
// //   name = "Angular " + VERSION.major;
// //   settings = {
// //     counter: false,
// //     plugins: [lgZoom]
// //   };
// //   onBeforeSlide = (detail: BeforeSlideDetail): void => {
// //     const { index, prevIndex } = detail;
// //     console.log(index, prevIndex);
// //   };
// // }
// // export class GalleryPageComponent {
// // }
// // jQuery("#animated-thumbnails-gallery")
// //   .justifiedGallery({
// //     captions: false,
// //     lastRow: "hide",
// //     rowHeight: 180,
// //     margins: 5
// //   })
// //   .on("jg.complete", function () {
// //     window.lightGallery(
// //       document.getElementById("animated-thumbnails-gallery"),
// //       {
// //         autoplayFirstVideo: false,
// //         pager: false,
// //         galleryId: "nature",
// //         plugins: [lgZoom, lgThumbnail],
// //         mobileSettings: {
// //           controls: false,
// //           showCloseIcon: false,
// //           download: false,
// //           rotate: false
// //         }
// //       }
// //     );
// //   });
// var core_1 = require("@angular/core");
// var $ = require("jquery"); // Import jQuery
// require("lightgallery"); // Import the jQuery lightGallery plugin
// require("lg-thumbnail"); // Import the jQuery lightGallery thumbnail plugin
// require("lg-fullscreen"); // Import the jQuery lightGallery fullscreen plugin
// require("lg-zoom"); // Import the jQuery lightGallery zoom plugin
// require("lg-autoplay"); // Import the jQuery lightGallery autoplay plugin
// require("lg-share"); // Import the jQuery lightGallery share plugin
// require("lg-hash"); // Import the jQuery lightGallery hash plugin
// var GalleryPageComponent = function () {
//     var _classDecorators = [(0, core_1.Component)({
//             selector: 'app-gallery',
//             templateUrl: './gallery.component.html',
//             styleUrls: ['./gallery.component.css']
//         })];
//     var _classDescriptor;
//     var _classExtraInitializers = [];
//     var _classThis;
//     var GalleryPageComponent = _classThis = /** @class */ (function () {
//         function GalleryPageComponent_1(elementRef) {
//             this.elementRef = elementRef;
//         }
//         GalleryPageComponent_1.prototype.ngOnInit = function () {
//             this.initializeJustifiedGallery();
//         };
//         GalleryPageComponent_1.prototype.initializeJustifiedGallery = function () {
//             var _this = this;
//             var options = {
//                 captions: false,
//                 lastRow: "hide",
//                 rowHeight: 180,
//                 margins: 5
//             };
//             var galleryElement = this.elementRef.nativeElement.querySelector("#animated-thumbnails-gallery");
//             if (galleryElement) {
//                 // Type assertion to bypass TypeScript's type checking
//                 $(galleryElement).justifiedGallery(options).on("jg.complete", function () {
//                     _this.initializeLightGallery(galleryElement);
//                 });
//             }
//         };
//         GalleryPageComponent_1.prototype.initializeLightGallery = function (galleryElement) {
//             var options = {
//                 autoplayFirstVideo: false,
//                 pager: false,
//                 galleryId: "nature",
//                 mobileSettings: {
//                     controls: false,
//                     showCloseIcon: false,
//                     download: false,
//                     rotate: false
//                 }
//             };
//             // Type assertion to bypass TypeScript's type checking
//             $(galleryElement).lightGallery(options); // Initialize lightGallery using jQuery
//         };
//         return GalleryPageComponent_1;
//     }());
//     __setFunctionName(_classThis, "GalleryPageComponent");
//     (function () {
//         var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
//         __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
//         GalleryPageComponent = _classThis = _classDescriptor.value;
//         if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
//         __runInitializers(_classThis, _classExtraInitializers);
//     })();
//     return GalleryPageComponent = _classThis;
// }();
// exports.GalleryPageComponent = GalleryPageComponent;
