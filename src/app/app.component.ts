import { Component, OnInit } from '@angular/core';
import { PLACES } from '../data/places';
import { PlaceInterface } from './interface/place.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public places: PlaceInterface[] = PLACES;

  public currentPlace: PlaceInterface;

  public setCurrentPlace(place: PlaceInterface) {
    this.currentPlace = place;
  }

  ngOnInit() {
  }
}
