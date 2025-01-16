import { Component } from '@angular/core';

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
}
