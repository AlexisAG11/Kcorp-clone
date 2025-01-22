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
  

  // onMouseMove(event: MouseEvent){
  //   this.scrollRight()
  // }

  // public scrollRight(): void {
  //   this.scrollContainer.nativeElement.scrollTo({ left: (this.scrollContainer.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  // }

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
    if (this.carousel.scrollLeft == (this.carousel.scrollWidth - this.carousel.clientWidth)) return;


    this.positionDiff = Math.abs(this.positionDiff);
    let marginRightCalc = (this.container.getBoundingClientRect().width - this.firstImg.getBoundingClientRect().width)/2;
    let firstImgWidth = this.firstImg.getBoundingClientRect().width + 10
    let valDifference = firstImgWidth - this.positionDiff;

    if (this.carousel.scrollLeft > this.prevScrollLeft) {
      // return this.carousel.scrollLeft += this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
      const targetScrollLeft = this.carousel.scrollLeft + (this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff);
      this.smoothScroll(targetScrollLeft);
      return
    }
    // this.carousel.scrollLeft -= this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
    const targetScrollLeft = this.carousel.scrollLeft - (this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff);
    this.smoothScroll(targetScrollLeft);
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


  ngAfterViewInit(): void {
    // this.carousel = document.querySelector(".carousel");
    this.carousel = this.carouselElementRef.nativeElement;
    this.firstImg = this.firstImgElementRef.nativeElement;
    this.container = this.containerElementRef.nativeElement;
  }

}
