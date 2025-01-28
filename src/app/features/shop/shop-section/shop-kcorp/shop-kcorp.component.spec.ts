import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKcorpComponent } from './shop-kcorp.component';

describe('ShopKcorpComponent', () => {
  let component: ShopKcorpComponent;
  let fixture: ComponentFixture<ShopKcorpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopKcorpComponent]
    });
    fixture = TestBed.createComponent(ShopKcorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
