import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaComponent } from './chroma.component';

describe('ChromaComponent', () => {
  let component: ChromaComponent;
  let fixture: ComponentFixture<ChromaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChromaComponent]
    });
    fixture = TestBed.createComponent(ChromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
