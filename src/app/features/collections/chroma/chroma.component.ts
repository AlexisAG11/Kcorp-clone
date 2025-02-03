import { Component } from '@angular/core';

@Component({
  selector: 'app-chroma',
  templateUrl: './chroma.component.html',
  styleUrls: ['./chroma.component.css']
})
export class ChromaComponent {

  chromaImg = [
    {imgUrl: '../../../../../assets/images/Emilie3.webp', title: ' Polo Chroma Blanc', subtitle: '€70,00'},
    {imgUrl: '../../../../../assets/images/Ava_1.webp' , title: 'Polo Chroma Noir', subtitle: '€70,00'},
  ]

  isFilterByBottom = false;
  isFilterByTop = false;
  isFilterBySide0 = false;
  isFilterBySide1 = false;
  isFilterBySide2 = false;

  valueStart = 0;
  valueEnd = 70;

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
