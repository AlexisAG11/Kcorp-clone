import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop-derniere-collection',
  templateUrl: './shop-derniere-collection.component.html',
  styleUrls: ['./shop-derniere-collection.component.css']
})

export class ShopDerniereCollectionComponent implements AfterViewInit {

  typeCollection = [
    {label: 'Nos produits', onIt: true },
    {label: 'Chroma', onIt: false  },
    {label: 'Accessoires', onIt: false  },
  ]

  nosProduitsImg = [
    {imgUrl: '../../../../../assets/images/4_2025.webp', title: ' Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/Frontultra.webp' , title: ' Maillot Ultra 2025', subtitle: 'Dès €65,00'},
    {imgUrl: '../../../../../assets/images/Marteen_Veste.webp' , title: ' Veste Pro Kit 2025', subtitle: 'Dès €90,00'},
  ]


  onTypeCollection(label: string){
    const indexOld = this.typeCollection.findIndex(item => item.onIt === true);
    if (indexOld !== -1) {
      this.typeCollection[indexOld].onIt = false;
    }
    const indexNew = this.typeCollection.findIndex(item => item.label === label);
    if (indexNew !== -1) {
      this.typeCollection[indexNew].onIt = true;
    }
    console.log(this.typeCollection);
  }
  
  carousel: any;
  firstImg: any;
  container: any;
  @ViewChild('carousel') carouselElementRef!: ElementRef;
  @ViewChild('firstImg') firstImgElementRef!: ElementRef;
  @ViewChild('container') containerElementRef!: ElementRef;
  

  isDrageStart = false;
  isDragging = false;
  prevPageX: any;
  prevScrollLeft: any;
  positionDiff: any
  dragSmooth = true;
  indexImg = 0;
  
  onMouseMove(e: MouseEvent | TouchEvent) {
    if (this.carousel) {
      if (!this.isDrageStart) return
      e.preventDefault();
      this.isDragging = true;
      this.dragSmooth = false;
      if (e instanceof MouseEvent) {
        // MouseEvent has pageX
        this.positionDiff = (e.pageX) - this.prevPageX;
      } else if (e instanceof TouchEvent) {
        // TouchEvent has touches[0]
        this.positionDiff = (e.touches[0].pageX) - this.prevPageX;
      }
      this.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
    }
  }

  onMouseDown(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    this.dragSmooth = true;
    this.isDrageStart = true;
    if (e instanceof MouseEvent) {
      this.prevPageX = e.pageX;
    } else if (e instanceof TouchEvent) {
      this.prevPageX = e.touches[0].pageX ;
    }
    this.prevScrollLeft = this.carousel.scrollLeft;
  }

  autoSlide() {

    if (this.carousel.scrollLeft == (this.carousel.scrollWidth - this.carousel.clientWidth)) {
      return;
    } 


    this.positionDiff = Math.abs(this.positionDiff);
    let marginRightCalc = (this.container.getBoundingClientRect().width - this.firstImg.getBoundingClientRect().width)/2;
    let firstImgWidth = this.firstImg.getBoundingClientRect().width + 10
    let valDifference = firstImgWidth - this.positionDiff;

    // right
    if (this.carousel.scrollLeft > this.prevScrollLeft) {
      // full on the right don't go further
      if (this.indexImg === this.nosProduitsImg.length-1) return
      if (this.positionDiff > firstImgWidth / 3) {
        const targetScrollLeft = this.carousel.scrollLeft + valDifference
        this.indexImg++;
        this.smoothScroll(targetScrollLeft);
      }
      else {
        if (this.indexImg === this.nosProduitsImg.length-1) return
        const targetScrollLeft = this.carousel.scrollLeft + (-this.positionDiff)
        this.smoothScroll(targetScrollLeft);
      }
      return
    }
    // left
    if (this.positionDiff > firstImgWidth / 3) {
      // full on the left don't go further
      if (this.indexImg === 0) return
      const targetScrollLeft = this.carousel.scrollLeft - valDifference
      console.log(targetScrollLeft);
      this.indexImg--;
      this.smoothScroll(targetScrollLeft);
    }
    else {
      if (this.indexImg === 0) return
      const targetScrollLeft = this.carousel.scrollLeft - (-this.positionDiff)
      this.smoothScroll(targetScrollLeft);
    }
  }

  onMouseUp(e: MouseEvent | TouchEvent) {
    this.isDrageStart = false;

    if (!this.isDragging) return;
    this.isDragging = false;
    this.autoSlide();
  }

  smoothScroll(targetScrollLeft: number) {
    const startScrollLeft = this.carousel.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    const duration = 500; // Duration of the animation in milliseconds
    const startTime = performance.now();
  
    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
  
      // Ease function for smoothness (ease-out effect)
      const ease = 1 - Math.pow(1 - progress, 3);
  
      // Update the scrollLeft position
      this.carousel.scrollLeft = startScrollLeft + distance * ease;
  
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    };
  
    window.requestAnimationFrame(scrollStep);
  }

  setIndexImg(index: number){
    const diffIndex = index - this.indexImg;
    const targetScrollLeft = index*(this.firstImg.getBoundingClientRect().width+10)
    if (diffIndex===0) {
      return
    }
    if (diffIndex>0) {
      this.indexImg+= diffIndex;
    }
    if (diffIndex<0) {
      this.indexImg+= diffIndex;

    }
    this.smoothScroll(targetScrollLeft);
  }


  ngAfterViewInit(): void {
    // this.carousel = document.querySelector(".carousel");
    this.carousel = this.carouselElementRef.nativeElement;
    this.firstImg = this.firstImgElementRef.nativeElement;
    this.container = this.containerElementRef.nativeElement;
  }

}
