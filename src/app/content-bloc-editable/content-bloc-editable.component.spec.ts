import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlocEditableComponent } from './content-bloc-editable.component';

describe('ContentBlocEditableComponent', () => {
  let component: ContentBlocEditableComponent;
  let fixture: ComponentFixture<ContentBlocEditableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBlocEditableComponent]
    });
    fixture = TestBed.createComponent(ContentBlocEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
