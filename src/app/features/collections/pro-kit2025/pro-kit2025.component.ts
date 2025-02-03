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

  

}
