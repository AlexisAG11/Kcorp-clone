import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopVideoComponent } from './shop-video.component';

describe('ShopVideoComponent', () => {
  let component: ShopVideoComponent;
  let fixture: ComponentFixture<ShopVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopVideoComponent]
    });
    fixture = TestBed.createComponent(ShopVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
