import { Component, HostListener } from '@angular/core';
import { flush } from '@angular/core/testing';
import { GeneralServiceService } from 'src/app/general-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private generalService: GeneralServiceService){}

  navLink = [
    {href: '', label: 'ACCUEIL'},
    {href: 'blue-heart', label: 'BLUE HEART'},
    {href: 'partenaires', label: 'PARTENAIRES'},
    {href: 'boutique', label: 'BOUTIQUE'},
  ]

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
  
  inBoutique = false;

  cartCounter=0;

  scrolled = false;
  // isMobileMenu: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    this.scrolled = window.scrollY > 0;
  }

  onAddCart(){
    this.cartCounter++;
    this.generalService.sendCartInfo.next(this.cartCounter);
  }

  onHamburger(){
    // this.isMobileMenu = true;
    this.generalService.isMobileMenu.next(true);
  }

  onHover(value: boolean,i :number){
    if (i == 3) {
      this.inBoutique = value;
    }
    console.log(this.inBoutique);
    }
}
