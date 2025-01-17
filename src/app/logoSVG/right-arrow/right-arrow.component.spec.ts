import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightArrowComponent } from './right-arrow.component';

describe('RightArrowComponent', () => {
  let component: RightArrowComponent;
  let fixture: ComponentFixture<RightArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightArrowComponent]
    });
    fixture = TestBed.createComponent(RightArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
