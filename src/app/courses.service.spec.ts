import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoursesService, CourseCreate } from './courses.service';
import { environment } from 'src/environments/environment.local';


describe('CoursesService', () => {
  let service: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService],
    });

    service = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should some courses.', async(() => {
    service.getCourses().subscribe((courses) => {
      console.log('courses', courses)
      
      // expect(courses.length).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrl}/courses`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  }));


});
