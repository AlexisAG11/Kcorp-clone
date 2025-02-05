import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  boutique = true;

    constructor(
                private router: Router
    ){}

  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/'  || event.url === '/boutique') {
          this.boutique = true;
        }
        else {
          this.boutique = false;
        }
      }
    });
  }

}
