import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvaComponent } from './off-canva.component';

describe('OffCanvaComponent', () => {
  let component: OffCanvaComponent;
  let fixture: ComponentFixture<OffCanvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffCanvaComponent]
    });
    fixture = TestBed.createComponent(OffCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
