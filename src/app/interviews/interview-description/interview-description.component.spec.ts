import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDescriptionComponent } from './interview-description.component';

describe('InterviewDescriptionComponent', () => {
  let component: InterviewDescriptionComponent;
  let fixture: ComponentFixture<InterviewDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
