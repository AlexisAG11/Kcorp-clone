import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProKit2025Component } from './pro-kit2025.component';

describe('ProKit2025Component', () => {
  let component: ProKit2025Component;
  let fixture: ComponentFixture<ProKit2025Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProKit2025Component]
    });
    fixture = TestBed.createComponent(ProKit2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
