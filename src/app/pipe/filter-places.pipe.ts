import { Pipe, PipeTransform } from '@angular/core';
import { PlaceInterface } from '../interface/place.interface';

@Pipe({
  name: 'filterPlaces'
})
export class FilterPlacesPipe implements PipeTransform {
  transform(places: PlaceInterface[], type: string): PlaceInterface[] {
    return places.filter(place => place.type === type);
  }
}
