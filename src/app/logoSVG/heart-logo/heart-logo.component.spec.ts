import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartLogoComponent } from './heart-logo.component';

describe('HeartLogoComponent', () => {
  let component: HeartLogoComponent;
  let fixture: ComponentFixture<HeartLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartLogoComponent]
    });
    fixture = TestBed.createComponent(HeartLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
