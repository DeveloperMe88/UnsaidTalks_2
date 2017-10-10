import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCollegeComponent } from './selected-college.component';

describe('SelectedCollegeComponent', () => {
  let component: SelectedCollegeComponent;
  let fixture: ComponentFixture<SelectedCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
