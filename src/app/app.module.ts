import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { PlacesComponent } from './places/places.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { PhonePipe } from './pipe/phone.pipe';
import { PlaceTabsPipe } from './pipe/place-tabs.pipe';
import { FilterPlacesPipe } from './pipe/filter-places.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    WeatherComponent,
    SocialComponent,
    PhonePipe,
    PlaceTabsPipe,
    FilterPlacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
