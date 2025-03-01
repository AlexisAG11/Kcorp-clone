import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-maillot-pro-2025',
  templateUrl: './maillot-pro-2025.component.html',
  styleUrls: ['./maillot-pro-2025.component.css']
})
export class MaillotPro2025Component implements OnInit {


  isActive = false;

  // disableSelect = new FormControl(false);
  numOfProduct = 1;
  priceOfProduct = 80;

  isCustom = false;
  isCompo = false;
  isEntr = false;

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

  carousel0: any;
  carousel1: any;
  carousel2: any;
  firstImg0: any;
  firstImg1: any;
  firstImg2: any;
  container0: any;
  container1: any;
  container2: any;
  firstSlider0: any
  @ViewChild ('carousel0') carouselElementRef0!: ElementRef;
  @ViewChild('firstImg0') firstImgElementRef0!: ElementRef;
  @ViewChild('container0') containerElementRef0!: ElementRef;
  @ViewChild('firstSlider0') firstSliderElementRef0!: ElementRef;

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

  translateValue: any = 0;

  nosProduitsImg = [
    {imgUrl: '../../../../../assets/images/3_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/4_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/5_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/6_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/7_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/8_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/9_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/10_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/11_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/12_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
  ]

  tailleArray = [
    {taille: 'XS', onIt: false},
    {taille: 'S', onIt: false},
    {taille: 'M', onIt: false},
    {taille: 'L', onIt: false},
    {taille: 'XL', onIt: false},
    {taille: '2XL', onIt: false},
    {taille: '3XL', onIt: false},
  ]

  inputValueNumber = "";
  inputValuePseudo = "";

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


  lastScrollY = 0;
  isSticky = false;

  stopLastScrollY = 0;
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    const threshold = 300; // Stick when scrolled past 50px

    if (scrollY > threshold && scrollY > this.lastScrollY) {
      // Scrolling down, make it sticky
      this.isSticky = true;
      this.stopLastScrollY = this.lastScrollY;
    } else if (scrollY < this.lastScrollY) {
      // Scrolling up, remove sticky
      this.isSticky = false;
    }
    
    this.lastScrollY = scrollY;

  }

  get dynamicTop() {
    return `-top-[${this.stopLastScrollY}px]`;
  }

  // inputLength: number = 0;

  // limitInputLength() {
  //   const maxLength = 2;
  //   const stringValue = this.inputValueNumber?.toString() || '';
    
  //   // If the length exceeds the maxLength, truncate the input value
  //   if (stringValue.length > maxLength) {
  //     this.inputValueNumber = parseFloat(stringValue.slice(0, maxLength));
  //   }
    
  //   this.inputLength = this.inputValueNumber?.toString().length || 0;
  // }

  onClickTaille(index:number){
    this.tailleArray.forEach(item => {
      if (item.onIt === true) {
          item.onIt = false;
      }
      this.tailleArray[index].onIt = true;
  });
  }


  onMouseMove(e: MouseEvent | TouchEvent) {
    if (this.mainCarousel) {
      if (!this.isDrageStart) return
      e.preventDefault();
      this.isDragging = true;
      this.dragSmooth = false;
      this.displaySlider = true;
      if (e instanceof MouseEvent) {
        // MouseEvent has pageX
        this.positionDiff = (e.pageX) - this.prevPageX;
      } else if (e instanceof TouchEvent) {
        // TouchEvent has touches[0]
        this.positionDiff = (e.touches[0].pageX) - this.prevPageX;
      }
      this.mainCarousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
      this.translateValue = (this.prevScrollLeft - this.positionDiff)/this.nosProduitsImg.length;
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
    
    this.positionDiff = Math.abs(this.positionDiff);
    let firstImgWidth = this.mainFirstImg.getBoundingClientRect().width;
    let firstSliderWidth = this.firstSlider0.getBoundingClientRect().width;

    // all the way to the right, don't need to smooth scroll
    if (this.mainCarousel.scrollLeft == (this.mainCarousel.scrollWidth - this.mainCarousel.clientWidth)) {
      const indexFind = 0;
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        this.indexImg =  this.nosProduitsImg.length-1
      } 
      else {
        this.indexImg = this.nosProduitsImg.length-3;
      }
      this.fadeOutSlider()
      return;
    } 

    // all the way to the left, don't need to smooth scroll
    if (this.mainCarousel.scrollLeft === 0) {
      this.indexImg = 0;
      this.fadeOutSlider()
      return;
    }



    // right
    if (this.mainCarousel.scrollLeft > this.prevScrollLeft) {
      // full on the right don't go further
      if (this.indexImg === this.nosProduitsImg.length-1) return
      if (this.positionDiff > firstImgWidth / 3) {
        const indexSkip = Math.floor(this.positionDiff/firstImgWidth);
        this.indexImg+= 1+indexSkip;
      }
      const targetScrollLeft = firstImgWidth*this.indexImg;
      const targetSliderScrollLeft = firstSliderWidth*this.indexImg;
      this.smoothScroll(targetScrollLeft);
      this.smoothScrollSlider(targetSliderScrollLeft);
      this.fadeOutSlider()
      return
    }
    // left
    // full on the left don't go further
    if (this.indexImg === 0) return
    if (this.positionDiff > firstImgWidth / 3) {
      const indexSkip = Math.floor(this.positionDiff/firstImgWidth);
      this.indexImg+= -1-indexSkip;
    }
    const targetScrollLeft = firstImgWidth*this.indexImg;
    const targetSliderScrollLeft = firstSliderWidth*this.indexImg;
    this.smoothScroll(targetScrollLeft);
    this.smoothScrollSlider(targetSliderScrollLeft);
    this.fadeOutSlider();    
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

  smoothScrollSlider(targetScrollLeft: number) {
    const startScrollLeft = this.translateValue;
    const distance = targetScrollLeft - startScrollLeft;
    const duration = 500; // Duration of the animation in milliseconds
    const startTime = performance.now();
  
    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
  
      // Ease function for smoothness (ease-out effect)
      const ease = 1 - Math.pow(1 - progress, 3);
  
      // Update the scrollLeft position
      this.translateValue = startScrollLeft + distance * ease;
  
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    };
  
    window.requestAnimationFrame(scrollStep);
  }

  updateBasedOnWidth(index: number, isInit: boolean) {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      this.marginRight = 10;
      this.numOfbtn = Array.from({ length:  this.nosProduitsImg.length }, (_, i) => i + 1);
    } 
    else {
      if (screenWidth < 1024) {
        this.marginRight = 25;
      } else {
        this.marginRight = 40;
      }

      let count =  this.nosProduitsImg.length - 2;
      if (count < 2) {
        count = 0
      }
      this.numOfbtn = Array.from({ length: count }, (_, i) => i + 1);
    }
    if (!isInit) {
      this.indexImg = 0;
      this.smoothScroll(this.indexImg);
    }
  }

      @HostListener ('window:resize', ['$event'])
      onResize(event: Event): void {
        this.updateBasedOnWidth(0, false);
      }

      ngOnInit(): void {
        this.updateBasedOnWidth(0, true)
      }

      ngAfterViewInit(): void {
        this.carousel0 = this.carouselElementRef0.nativeElement;
        this.firstImg0 = this.firstImgElementRef0.nativeElement;
        this.container0 = this.containerElementRef0.nativeElement;
        this.firstSlider0 = this.firstSliderElementRef0.nativeElement;
        this.mainCarousel = this.carousel0;
        this.mainContainer = this.container0;
        this.mainFirstImg = this.firstImg0;
      }

      displaySlider = false;
      movementTimeout: any;
      fadeOutSlider() {
        clearTimeout(this.movementTimeout);
        this.movementTimeout = setTimeout(() => {
          this.displaySlider = false; 
        }, 1000);
      }


}
