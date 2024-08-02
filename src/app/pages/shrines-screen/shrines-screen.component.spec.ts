import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinesScreenComponent } from './shrines-screen.component';

describe('ShrinesScreenComponent', () => {
  let component: ShrinesScreenComponent;
  let fixture: ComponentFixture<ShrinesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShrinesScreenComponent]
    });
    fixture = TestBed.createComponent(ShrinesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
