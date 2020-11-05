import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CardProductComponent } from './card-product/card-product.component';
import { TiltHoverEffect3dComponent } from './tilt-hover-effect3d/tilt-hover-effect3d.component';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';
import { FilterGalleryComponent } from './filter-gallery/filter-gallery.component';
import { CssSliderComponent } from './css-slider/css-slider.component';
import { SliderLightComponent } from './slider-light/slider-light.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BlogComponent,
    CardProductComponent,
    TiltHoverEffect3dComponent,
    ImagesGalleryComponent,
    FilterGalleryComponent,
    CssSliderComponent,
    SliderLightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    CarouselModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
