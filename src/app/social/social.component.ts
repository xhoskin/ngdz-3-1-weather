import { Component, OnInit, Input } from '@angular/core';
import { PlaceInterface } from '../interface/place.interface';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  @Input() place: PlaceInterface;

  constructor() { }

  ngOnInit() {
  }

}
