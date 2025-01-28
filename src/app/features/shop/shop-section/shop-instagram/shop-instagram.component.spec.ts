import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInstagramComponent } from './shop-instagram.component';

describe('ShopInstagramComponent', () => {
  let component: ShopInstagramComponent;
  let fixture: ComponentFixture<ShopInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopInstagramComponent]
    });
    fixture = TestBed.createComponent(ShopInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
