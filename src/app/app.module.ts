import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { ScrollingConteinerComponent } from './scrolling-conteiner/scrolling-conteiner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CardProductComponent,
    TiltHoverEffect3dComponent,
    ImagesGalleryComponent,
    FilterGalleryComponent,
    CssSliderComponent,
    SliderLightComponent,
    ScrollingConteinerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    CarouselModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
