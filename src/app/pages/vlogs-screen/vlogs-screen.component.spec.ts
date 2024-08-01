import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogsScreenComponent } from './vlogs-screen.component';

describe('VlogsScreenComponent', () => {
  let component: VlogsScreenComponent;
  let fixture: ComponentFixture<VlogsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VlogsScreenComponent]
    });
    fixture = TestBed.createComponent(VlogsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
