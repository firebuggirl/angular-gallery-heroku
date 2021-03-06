import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MohaveComponent } from './mohave/mohave.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent,
    MohaveComponent

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular4-photo-gallery'}),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
