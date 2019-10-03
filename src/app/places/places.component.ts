import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaceTabInterface } from '../interface/place-tab.interface';
import { PlaceInterface } from '../interface/place.interface';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  @Input() places: PlaceInterface[];
  @Output() changePlace: EventEmitter<PlaceInterface> = new EventEmitter();

  public tabs: PlaceTabInterface[] = [];

  currentPlace: PlaceInterface;

  constructor() { }

  ngOnInit() {
    this.setCurrentPlace(this.places[0]);
  }

  public setCurrentPlace(place: PlaceInterface) {
    this.currentPlace = place;
    this.changePlace.emit(place);
  }
}
