import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relationshipStatus',
})
export class RelationshipStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Single';
      case 2:
        return 'In relationship';
    }
    return 'Married';
  }
}
