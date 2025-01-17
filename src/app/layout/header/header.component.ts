import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navLink = [
    {href: '', label: 'ACCUEIL'},
    {href: 'blue-heart', label: 'BLUE HEART'},
    {href: 'partenaires', label: 'PARTENAIRES'},
    {href: 'boutique', label: 'BOUTIQUE'},
  ]

  cartCounter=0;

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    this.scrolled = window.scrollY > 0;
  }
}
