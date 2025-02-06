import { AfterViewInit, booleanAttribute, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'app-pro-kit2025',
  templateUrl: './pro-kit2025.component.html',
  styleUrls: ['./pro-kit2025.component.css']
})
export class ProKit2025Component {
  nosProduitsImg = [
    {imgUrl: '../../../../../assets/images/4_2025.webp', title: ' Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/Frontultra.webp' , title: ' Maillot Ultra 2025', subtitle: '€65,00'},
    {imgUrl: '../../../../../assets/images/Marteen_Veste.webp' , title: ' Veste Pro Kit 2025', subtitle: '€90,00'},
    {imgUrl: '../../../../../assets/images/JoggFront2025.webp', title: ' Jogging Pro Kit 2025', subtitle: '€60,00'},
  ]

  isFilterByBottom = false;
  isFilterByTop = false;
  isFilterBySide0 = false;
  isFilterBySide1 = false;
  isFilterBySide2 = false;

  valueStart = 0;
  valueEnd = 95;

  showFilterBottom(){
    this.isFilterByBottom = !this.isFilterByBottom
  }
  showFilterTop(){
    this.isFilterByTop = !this.isFilterByTop
  }
  showFilterSide(num: number){
    if (num===0) this.isFilterBySide0 = !this.isFilterBySide0;
    if (num===1) this.isFilterBySide1 = !this.isFilterBySide1;
    if (num===2) this.isFilterBySide2 = !this.isFilterBySide2;
  }

  

  
// *
// *
// *
//   ajouter panier part 
// *
// *
// *



isOverlayAjoutPanier = false;
tailleArray = [
  {taille: 'XS', onIt: false},
  {taille: 'S', onIt: false},
  {taille: 'M', onIt: false},
  {taille: 'L', onIt: false},
  {taille: 'XL', onIt: false},
  {taille: '2XL', onIt: false},
  {taille: '3XL', onIt: false},
]
isActive = false;
optionSelectArray = [
  "7 - CANNA",
  "11 - YIKE",
  "10 - VLADI",
  "28 - CALISTE",
  "1 - TARGAMAS",
  "10 - AVEZ",
  "64 - SUYGETSU",
  "24 - MARTEEN",
  "23 - SAADHAK",
  "9 - ELITE",
  "16 - ZE1SH",
  "54 - ATOW",
  "15 - DRALII",
  "9 - VATIRA",
  "5 - DOUBLE",
  "17 - CANBIZZ",
];
inputValueNumber = "";
inputValuePseudo = "";
numOfProduct = 1;
priceOfProduct = 80;

onClickTaille(index:number){
  this.tailleArray.forEach(item => {
    if (item.onIt === true) {
        item.onIt = false;
    }
    this.tailleArray[index].onIt = true;
  });
}

numberOnly(event:any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

minusNumberOfProduct(){
  this.numOfProduct--;
  this.priceOfProduct = 80*this.numOfProduct;
}
plusNumberOfProduct(){
  this.numOfProduct++;
  this.priceOfProduct = 80*this.numOfProduct;
}

onOverlayAjoutPanier(){
  this.isOverlayAjoutPanier = true;
}


}
