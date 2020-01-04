import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseDisaplay'
})
export class UppercaseDisaplayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args)
    return value.toUpperCase();
  }

}
