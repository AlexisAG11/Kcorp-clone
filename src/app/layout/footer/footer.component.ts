import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isCatalogue: boolean = false;
  isInformations: boolean = false;
  

  onCatalogue(){
    this.isCatalogue = !this.isCatalogue;
  }
  onInformations(){
    this.isInformations = !this.isInformations;
  }

}
