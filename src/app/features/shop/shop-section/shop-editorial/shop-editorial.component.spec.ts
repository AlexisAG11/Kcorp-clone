import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEditorialComponent } from './shop-editorial.component';

describe('ShopEditorialComponent', () => {
  let component: ShopEditorialComponent;
  let fixture: ComponentFixture<ShopEditorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopEditorialComponent]
    });
    fixture = TestBed.createComponent(ShopEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
