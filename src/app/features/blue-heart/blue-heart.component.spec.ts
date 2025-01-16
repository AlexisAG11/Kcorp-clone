import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHeartComponent } from './blue-heart.component';

describe('BlueHeartComponent', () => {
  let component: BlueHeartComponent;
  let fixture: ComponentFixture<BlueHeartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueHeartComponent]
    });
    fixture = TestBed.createComponent(BlueHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
