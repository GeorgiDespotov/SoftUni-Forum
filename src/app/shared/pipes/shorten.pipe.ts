import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string | undefined, length: number): unknown {
    return value!.length > length ? `${value!.substring(0, length)}...` : value;
  }

}
