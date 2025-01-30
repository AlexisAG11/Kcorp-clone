import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { GeneralServiceService } from 'src/app/general-service.service';

@Component({
  selector: 'app-off-canva',
  templateUrl: './off-canva.component.html',
  styleUrls: ['./off-canva.component.css']
})
export class OffCanvaComponent implements OnInit {

  cartValue: number = 0;
  isMobileMenu: boolean = false;
  isInsideBoutiqueMenu: boolean = false;
  isCollection: boolean = false;
  isAccessoire: boolean = false;

  nosCollections = [
    "Pro Kit 2025",
    "Finally Home",
    "Baseball",
    "Essentials",
    "Worlds 2024",
    "Pro Kit",
    "Légende du club",
    "Nos produits",
  ]

  Accessoires = [
    "KCX 4",
    "Rhinoshield",
    "celio x Karmine Corp",
    "Quersus",
    "Worlds 2024",
    "Logitech",
    "Piece of History",
  ]

  constructor(private generalService: GeneralServiceService, private _render: Renderer2){}

  onRemoveMenu(){
    this.isMobileMenu = false;
    this.generalService.isMobileMenu.next(this.isMobileMenu);
  }

  onBoutiqueMenu(){
    this.isInsideBoutiqueMenu = !this.isInsideBoutiqueMenu
  }

  goBackMenu(){
    this.isInsideBoutiqueMenu = false;
  }

  onCollectionMenu(){
    this.isCollection = !this.isCollection;
  }

  onAccessoiresMenu(){
    this.isAccessoire = !this.isAccessoire;
  }

  ngOnInit(): void {
    this.generalService.sendCartInfo.subscribe((data) => {
      this.cartValue = data;
    })
    this.generalService.isMobileMenu.subscribe((data)=> { 
      this.isMobileMenu = data;
      if (this.isMobileMenu === true) {
        this._render.setStyle(document.body, 'overflow', 'hidden')
      }
      else{
        this._render.setStyle(document.body, 'overflow', 'auto')
      }
    })
  }  
}
