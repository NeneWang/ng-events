import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';


export interface Student {
  id: number;
  name: string;
  lastname: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}


export interface StudentCreate {
  name: string;
  lastname: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];


  public _students$ = new BehaviorSubject<any | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private httpClient: HttpClient) { }

  getMajors() {
    return this.majors;
  }

  getStudents(): Observable<Student[]> {
    this.httpClient.get<Student[]>(`${environment.baseUrl}/students`)
      .subscribe({
        next: (response) => {
          if (!response.length) {
            // alert('NO users found');
          } else {
            this._students$.next(response);
            console.log('response', response)
          }
        }
      });


    return this._students$.asObservable();
  }


  getMajorsAsPromise(): Promise<string[] | undefined> {
    return of(this.majors).pipe(delay(500)).toPromise();
  }

  addStudent(student: StudentCreate): Observable<Student> {
    return this.httpClient
      .post<Student>(`${environment.baseUrl}/students`, student)
      .pipe(
        tap((newStudent) => {
          const currentStudents = this._students$.value;
          this._students$.next([...currentStudents, newStudent]);
        })
      );
  }

  deleteStudent(arg_id: number): Observable<void> {
    console.log(`${environment.baseUrl}/students/${arg_id}`);

    return this.httpClient.delete<void>(
      `${environment.baseUrl}/students/${arg_id}`
    ).pipe(
      tap(() => {
        // Remove the deleted student from the list
        const currentStudents = this._students$.value;
        console.log('currentStudents', currentStudents)
        const updatedStudents = currentStudents.filter((student: { id: number; })=> student.id !== arg_id);
     
        console.log('updatedStudents', updatedStudents)
        this._students$.next(updatedStudents);
      })
    );
  }

}
