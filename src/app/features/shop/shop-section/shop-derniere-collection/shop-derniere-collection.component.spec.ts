import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDerniereCollectionComponent } from './shop-derniere-collection.component';

describe('ShopDerniereCollectionComponent', () => {
  let component: ShopDerniereCollectionComponent;
  let fixture: ComponentFixture<ShopDerniereCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopDerniereCollectionComponent]
    });
    fixture = TestBed.createComponent(ShopDerniereCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
