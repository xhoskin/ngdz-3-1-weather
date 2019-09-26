import { Component, OnInit, Input } from '@angular/core';
import { PlaceInterface } from '../interface/place.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() place: PlaceInterface;

  constructor() { }

  ngOnInit() {
  }

}
