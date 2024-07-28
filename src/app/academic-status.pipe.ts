import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'academicStatus'
})
export class AcademicStatusPipe implements PipeTransform {

  transform(credits: number): string {
    if (credits < 30) {
      return 'Freshman';
    } else if (credits >= 30 && credits < 60) {
      return 'Sophomore';
    } else if (credits >= 60 && credits < 90) {
      return 'Junior';
    } else {
      return 'Senior';
    }
  }

}
