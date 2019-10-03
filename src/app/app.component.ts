import { Component, OnInit } from '@angular/core';
import { PLACES } from '../data/places';
import { places$ } from '../data/places';
import { PlaceInterface } from './interface/place.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public places: PlaceInterface[];
  public places$: Observable<PlaceInterface[]> = places$;

  public currentPlace: PlaceInterface;

  public setCurrentPlace(place: PlaceInterface) {
    this.currentPlace = place;
  }

  ngOnInit() {
    this.places$.subscribe((places) => {
      this.places = places;
      this.setCurrentPlace(places[0]);
    });
  }
}
