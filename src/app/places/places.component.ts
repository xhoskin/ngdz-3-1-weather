import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaceTabInterface } from '../interface/place-tab.interface';
import { PlaceInterface } from '../interface/place.interface';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  @Input() places: PlaceInterface[];
  @Output() changePlace: EventEmitter<PlaceInterface> = new EventEmitter();

  public tabs: PlaceTabInterface[] = [];

  currentPlace: PlaceInterface;

  constructor() { }

  ngOnInit() {
    this.setCurrentPlace(this.places[0]);
    this.places.forEach((place) => {
      if (this.tabs.every(tab => tab.name !== place.type)) {
        this.tabs.push({
          name: place.type,
          places: [place]
        });
      } else {
        const targetTab: PlaceTabInterface = this.tabs
          .find(tab => tab.name === place.type);
        targetTab.places.push(place);
      }
    });
  }

  public setCurrentPlace(place: PlaceInterface) {
    this.currentPlace = place;
    this.changePlace.emit(place);
  }
}
