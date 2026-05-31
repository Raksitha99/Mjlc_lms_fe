import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jlptLevelPipe',
})
export class JlptLevelPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
