import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDescriptionComponent } from './blog-description.component';

describe('BlogDescriptionComponent', () => {
  let component: BlogDescriptionComponent;
  let fixture: ComponentFixture<BlogDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
