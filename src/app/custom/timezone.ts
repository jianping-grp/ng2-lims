import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cusTimezone'
})
export class cusTimezone implements PipeTransform {

  transform(value: string, args?: any): any {
    let index=value.search('T');
    return value.slice();
  }

}
