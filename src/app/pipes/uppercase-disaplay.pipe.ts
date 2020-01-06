import { Pipe, PipeTransform } from '@angular/core';

// 过滤器，把乱七八糟的数据过滤成想要的格式，比如一堆时间信息按格式过滤。
@Pipe({
  name: 'uppercaseDisaplay'
})
export class UppercaseDisaplayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args)
    return value.toUpperCase();
  }

}
