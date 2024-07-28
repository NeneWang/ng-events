import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, concatMap, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.local';

export interface CourseCreate {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}

export interface Course {
  id: number;
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  public _courses$ = new BehaviorSubject<any | null>(null);


  private coursesSubject: Subject<CourseCreate[]> = new Subject<CourseCreate[]>();

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    // return of(this.courses).pipe(delay(500));
    this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`)
      .subscribe({
        next: (response) => {
          if (!response.length) {
            // alert('NO users found');
          } else {
            this._courses$.next(response);
            console.log('response', response)
          }
        }
      });

    return this._courses$.asObservable();
  }


  getCourseChanges(): Observable<CourseCreate[]> {
    return this.coursesSubject.asObservable();
  }

  addCourse(course: CourseCreate): Observable<CourseCreate> {
    return this.httpClient.post<CourseCreate>(`${environment.baseUrl}/courses`, course)
      .pipe(
        tap((newCourse) => {
          // this.courses.push(newCourse);
          const currentCourses = this._courses$.value;
          this._courses$.next([...currentCourses, newCourse]);
        })
      );
  }

  deleteCourse(arg_id: number): Observable<Course[]> {
    console.log(`${environment.baseUrl}/courses/${arg_id}`);
    console.log("type of arg id", typeof (arg_id));
    
    return this.httpClient.delete<void>(`${environment.baseUrl}/courses/${arg_id}`)
      .pipe(
        switchMap(() => this.getCourses()), // Use switchMap to refresh the courses list after deletion
        tap((courses) => {
          this._courses$.next(courses);
        })
      );
  }
  generateRandomCourse(): Observable<CourseCreate> {
    const course: CourseCreate = {
      'name': 'Random Course',
      'major': 'Random Major',
      'course_number': 'CS' + Math.round(Math.random() * 1000),
      'credits': Math.round(Math.random() * 4),
      'description': 'This course introduces students to the fundamentals of computer science and programming.'
    }
    return this.addCourse(course);
  }


}
