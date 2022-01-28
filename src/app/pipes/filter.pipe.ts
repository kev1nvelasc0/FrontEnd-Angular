import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (args === '' || args === undefined || args === ' ') {
      return value;
    }
    //args = args.toLowerCase();
    const result = [];
    for (const ciudad of value) {
      //ciudad.nombre = ciudad.nombre.toLowerCase();
      //ciudad.pais = ciudad.pais.toLowerCase();
      if (
        ciudad.nombre.indexOf(args) > -1 ||
        ciudad.pais.indexOf(args) > -1 ||
        ciudad.pais.indexOf(args) > -1
      ) {
        result.push(ciudad);
      }
    }
    return result;
  }
}
