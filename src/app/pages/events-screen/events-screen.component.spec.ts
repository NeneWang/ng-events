import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsScreenComponent } from './events-screen.component';

describe('EventsScreenComponent', () => {
  let component: EventsScreenComponent;
  let fixture: ComponentFixture<EventsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsScreenComponent]
    });
    fixture = TestBed.createComponent(EventsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
