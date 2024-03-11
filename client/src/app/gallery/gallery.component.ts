// import { Component, OnInit, ElementRef } from '@angular/core';
// import * as $ from 'jquery';  // Import jQuery
// import 'lightgallery';  // Import the jQuery lightGallery plugin
// import 'lg-thumbnail';  // Import the jQuery lightGallery thumbnail plugin
// import 'lg-fullscreen';  // Import the jQuery lightGallery fullscreen plugin
// import 'lg-zoom';  // Import the jQuery lightGallery zoom plugin
// import 'lg-autoplay';  // Import the jQuery lightGallery autoplay plugin
// import 'lg-share';  // Import the jQuery lightGallery share plugin
// import 'lg-hash';  // Import the jQuery lightGallery hash plugin

// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.css']
// })
// export class GalleryPageComponent implements OnInit {

//   constructor(private elementRef: ElementRef) { }

//   ngOnInit(): void {
//     this.initializeJustifiedGallery();
//   }

//   initializeJustifiedGallery(): void {
//     const options = {
//       captions: false,
//       lastRow: "hide",
//       rowHeight: 180,
//       margins: 5
//     };

//     const galleryElement = this.elementRef.nativeElement.querySelector("#animated-thumbnails-gallery");
//     if (galleryElement) {
//       // Type assertion to bypass TypeScript's type checking
//       ($(galleryElement) as any).justifiedGallery(options).on("jg.complete", () => {
//         this.initializeLightGallery(galleryElement);
//       });
//     }
//   }

//   initializeLightGallery(galleryElement: HTMLElement): void {
//     const options = {
//       autoplayFirstVideo: false,
//       pager: false,
//       galleryId: "nature",
//       mobileSettings: {
//         controls: false,
//         showCloseIcon: false,
//         download: false,
//         rotate: false
//       }
//     };

//     // Type assertion to bypass TypeScript's type checking
//     ($(galleryElement) as any).lightGallery(options);  // Initialize lightGallery using jQuery
//   }
// }

import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// Import lightGallery and its plugins
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('lightgallery', { static: false }) lightGalleryElement!: ElementRef;

  images = [
    { thumbnail: 'assets/images/gallery-images/10385234.jpg', full: 'assets/images/gallery-images/10385234.jpg' },
    { thumbnail: 'assets/images/gallery-images/10380552.jpg', full: 'assets/images/gallery-images/10380552.jpg' },
    { thumbnail: 'assets/images/gallery-images/10352429.jpg', full: 'assets/images/gallery-images/10352429.jpg' },
    { thumbnail: 'assets/images/gallery-images/10380640.jpg', full: 'assets/images/gallery-images/10380640.jpg' },
    { thumbnail: 'assets/images/gallery-images/10378460.jpg', full: 'assets/images/gallery-images/10378460.jpg' },
    { thumbnail: 'assets/images/gallery-images/10378594.jpg', full: 'assets/images/gallery-images/10378594.jpg' },
    { thumbnail: 'assets/images/gallery-images/10378761.jpg', full: 'assets/images/gallery-images/10378761.jpg' },
    { thumbnail: 'assets/images/gallery-images/10378775.jpg', full: 'assets/images/gallery-images/10378775.jpg' },
    { thumbnail: 'assets/images/gallery-images/10380536.jpg', full: 'assets/images/gallery-images/10380536.jpg' },
    { thumbnail: 'assets/images/gallery-images/10380586.jpg', full: 'assets/images/gallery-images/10380586.jpg' }
  ];

  private lightGalleryInstance: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeLightGallery();
  }

  ngOnDestroy(): void {
    if (this.lightGalleryInstance) {
      this.lightGalleryInstance.destroy();
    }
  }

  initializeLightGallery() {
    if (this.lightGalleryElement) {
      this.lightGalleryInstance = lightGallery(this.lightGalleryElement.nativeElement, {
        dynamic: true,
        download: false,
        actualSize: false,
        thumbWidth: 100,
        controls: true,
        toggleThumb: true,
        addClass: 'custom-class-for-lightgallery',
        mode: 'lg-slide',
        plugins: [lgThumbnail, lgZoom],
        dynamicEl: this.images.map(img => ({ 'src': img.full, 'thumb': img.thumbnail })),
      });
    }
  }
}


