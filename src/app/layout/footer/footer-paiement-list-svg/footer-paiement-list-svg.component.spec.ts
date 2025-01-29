import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPaiementListSvgComponent } from './footer-paiement-list-svg.component';

describe('FooterPaiementListSvgComponent', () => {
  let component: FooterPaiementListSvgComponent;
  let fixture: ComponentFixture<FooterPaiementListSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPaiementListSvgComponent]
    });
    fixture = TestBed.createComponent(FooterPaiementListSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
