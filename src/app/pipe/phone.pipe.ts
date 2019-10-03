import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d)(\d\d)/g, '+$1 ($2) $3-$4-$5');
  }
}
