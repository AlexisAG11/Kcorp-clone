import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPartenairesComponent } from './shop-partenaires.component';

describe('ShopPartenairesComponent', () => {
  let component: ShopPartenairesComponent;
  let fixture: ComponentFixture<ShopPartenairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPartenairesComponent]
    });
    fixture = TestBed.createComponent(ShopPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
