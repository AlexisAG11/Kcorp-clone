import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBundleComponent } from './shop-bundle.component';

describe('ShopBundleComponent', () => {
  let component: ShopBundleComponent;
  let fixture: ComponentFixture<ShopBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopBundleComponent]
    });
    fixture = TestBed.createComponent(ShopBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
