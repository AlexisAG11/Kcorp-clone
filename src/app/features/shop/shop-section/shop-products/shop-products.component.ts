import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent {

Accessoires = [
    {imgUrl: '../../../../../assets/images/pins-dore-bois.webp', title: "Pin's Karmine Doré", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/pinsdore_blackbois.webp', title: "Pin's Karmine Noir", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/pins-bleu-bois.webp', title: "Pin's Karmine Navy", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/kcwin-noir.jpg', title: "Porte clé #KCWIN Noir", subtitle: '€6,00'},
    {imgUrl: '../../../../../assets/images/kcorp-bleu.jpg', title: "Porte clé Karmin Noir", subtitle: '€6,00'},
  ]
  

  carousel3: any;
  firstImg3: any;
  container3: any;

  @ViewChild('carousel3') carouselElementRef3!: ElementRef
  @ViewChild('firstImg3') firstImgElementRef3!: ElementRef;
  @ViewChild('container3') containerElementRef3!: ElementRef;

  mainCarousel :any;
  mainContainer :any;
  mainFirstImg: any
  

  isDrageStart = false;
  isDragging = false;
  prevPageX: any;
  prevScrollLeft: any;
  positionDiff: any
  dragSmooth = true;
  indexImg = 0;
  numOfbtn : any;
  marginRight : number = 25;

  onMouseMove(e: MouseEvent | TouchEvent) {
    if (this.mainCarousel) {
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
      this.mainCarousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
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
    this.prevScrollLeft = this.mainCarousel.scrollLeft;
  }

  autoSlide() {

    if (this.mainCarousel.scrollLeft == (this.mainCarousel.scrollWidth - this.mainCarousel.clientWidth)) {
      return;
    } 


    this.positionDiff = Math.abs(this.positionDiff);
    // let marginRightCalc = (this.container.getBoundingClientRect().width - this.firstImg.getBoundingClientRect().width)/2;
    let firstImgWidth = this.mainFirstImg.getBoundingClientRect().width + this.marginRight;
    console.log(firstImgWidth);
    let valDifference = firstImgWidth - this.positionDiff;

    // right
    if (this.mainCarousel.scrollLeft > this.prevScrollLeft) {
      // full on the right don't go further
      if (this.positionDiff > firstImgWidth / 3) {
        // const targetScrollLeft = this.mainCarousel.scrollLeft + valDifference;
        this.indexImg++;
        const targetScrollLeft = firstImgWidth*this.indexImg;
        this.smoothScroll(targetScrollLeft);
      }
      else {
        // const targetScrollLeft = this.mainCarousel.scrollLeft + (-this.positionDiff)
        const targetScrollLeft = firstImgWidth*this.indexImg;
        this.smoothScroll(targetScrollLeft);
      }
      return
    }
    // left
    if (this.positionDiff > firstImgWidth / 3) {
      // full on the left don't go further
      if (this.indexImg === 0) return
      // const targetScrollLeft = this.mainCarousel.scrollLeft - valDifference;
      this.indexImg--;
      const targetScrollLeft = firstImgWidth*this.indexImg;
      this.smoothScroll(targetScrollLeft);
    }
    else {
      if (this.indexImg === 0) return
      // const targetScrollLeft = this.mainCarousel.scrollLeft - (-this.positionDiff)
      const targetScrollLeft = firstImgWidth*this.indexImg;
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
    const startScrollLeft = this.mainCarousel.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    const duration = 500; // Duration of the animation in milliseconds
    const startTime = performance.now();
  
    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
  
      // Ease function for smoothness (ease-out effect)
      const ease = 1 - Math.pow(1 - progress, 3);
  
      // Update the scrollLeft position
      this.mainCarousel.scrollLeft = startScrollLeft + distance * ease;
  
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    };
  
    window.requestAnimationFrame(scrollStep);
  }

  setIndexImg(index: number){

    const diffIndex = index - this.indexImg;
    const targetScrollLeft = index*(this.mainFirstImg.getBoundingClientRect().width+this.marginRight)
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

  updateBasedOnWidth(index: number) {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      this.marginRight = 10;
      this.numOfbtn = Array.from({ length:  this.Accessoires.length}, (_, i) => i + 1);
    } 
    else {
      if (screenWidth < 1024) {
        this.marginRight = 25;
      } else {
        this.marginRight = 40;
      }

      let count =  this.Accessoires.length - 2;
      if (count < 2) {
        count = 0
      }
      this.numOfbtn = Array.from({ length: count }, (_, i) => i + 1);
    }
  }

  ngOnInit(): void {
    this.updateBasedOnWidth(0)
  }


  ngAfterViewInit(): void {
    // this.carousel = document.querySelector(".carousel");
    this.carousel3 = this.carouselElementRef3.nativeElement;
    this.firstImg3 = this.firstImgElementRef3.nativeElement;
    this.container3 = this.containerElementRef3.nativeElement;
    this.mainCarousel = this.carousel3;
    this.mainContainer = this.container3;
    this.mainFirstImg = this.firstImg3;
  }

}
