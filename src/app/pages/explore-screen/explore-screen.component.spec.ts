import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreScreenComponent } from './explore-screen.component';

describe('ExploreScreenComponent', () => {
  let component: ExploreScreenComponent;
  let fixture: ComponentFixture<ExploreScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreScreenComponent]
    });
    fixture = TestBed.createComponent(ExploreScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
