import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaillotPro2025Component } from './maillot-pro-2025.component';

describe('MaillotPro2025Component', () => {
  let component: MaillotPro2025Component;
  let fixture: ComponentFixture<MaillotPro2025Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaillotPro2025Component]
    });
    fixture = TestBed.createComponent(MaillotPro2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
