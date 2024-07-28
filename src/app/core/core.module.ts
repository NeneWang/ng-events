// core/core.module.ts
import { NgModule } from '@angular/core';
import { CoursesService } from '../courses.service';
import { StudentsService } from '../students.service';

@NgModule({
  providers: [CoursesService, StudentsService],
})
export class CoreModule {}
