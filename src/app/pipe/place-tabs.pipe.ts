import { Pipe, PipeTransform } from '@angular/core';
import { PlaceInterface } from '../interface/place.interface';

@Pipe({
  name: 'placeTabs'
})
export class PlaceTabsPipe implements PipeTransform {

  transform(places: PlaceInterface[]): string[] {
    let result: string[] = [];
    places
      .map(place => place.type)
      .forEach(place => {
        if ( result.includes(place) === false ) {
          result.push(place);
        }
      });
    return result;
  }
}
