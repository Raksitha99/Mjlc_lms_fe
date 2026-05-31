import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lkrCurrencyPipe',
})
export class LkrCurrencyPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
