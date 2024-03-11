import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    GalleryPageComponent,
    LightgalleryModule
  ]
})
export class GalleryModule { }
