import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GalleryPageComponent,
    LightgalleryModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class GalleryModule { }
