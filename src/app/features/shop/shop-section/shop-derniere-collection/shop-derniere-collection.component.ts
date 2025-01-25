import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop-derniere-collection',
  templateUrl: './shop-derniere-collection.component.html',
  styleUrls: ['./shop-derniere-collection.component.css']
})

export class ShopDerniereCollectionComponent implements AfterViewInit {



  nosProduitsImg = [
    {imgUrl: '../../../../../assets/images/4_2025.webp', title: ' Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/Frontultra.webp' , title: ' Maillot Ultra 2025', subtitle: '€65,00'},
    {imgUrl: '../../../../../assets/images/Marteen_Veste.webp' , title: ' Veste Pro Kit 2025', subtitle: '€90,00'},
    {imgUrl: '../../../../../assets/images/JoggFront2025.webp', title: ' Jogging Pro Kit 2025', subtitle: '€60,00'},
    {imgUrl: '../../../../../assets/images/DUO_LOL_1.webp' , title: ' Précommande - Maillot League Of its Own', subtitle: 'Dès €75,00'},
    {imgUrl: '../../../../../assets/images/Ava_1.webp' , title: 'Polo Chroma Noir', subtitle: '€70,00'},
  ]

  chromaImg = [
    {imgUrl: '../../../../../assets/images/Emilie3.webp', title: ' Polo Chroma Blanc', subtitle: '€70,00'},
    {imgUrl: '../../../../../assets/images/Ava_1.webp' , title: 'Polo Chroma Noir', subtitle: '€70,00'},
  ]

  Accessoires = [
    {imgUrl: '../../../../../assets/images/pins-dore-bois.webp', title: "Pin's Karmine Doré", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/pinsdore_blackbois.webp', title: "Pin's Karmine Noir", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/pins-bleu-bois.webp', title: "Pin's Karmine Navy", subtitle: '€4,50'},
    {imgUrl: '../../../../../assets/images/kcwin-noir.jpg', title: "Porte clé #KCWIN Noir", subtitle: '€6,00'},
    {imgUrl: '../../../../../assets/images/kcorp-bleu.jpg', title: "Porte clé Karmin Noir", subtitle: '€6,00'},
  ]

  typeCollection = [
    {label: 'Nos produits', onIt: true, array: this.nosProduitsImg },
    {label: 'Chroma', onIt: false,  array: this.chromaImg},
    {label: 'Accessoires', onIt: false, array: this.Accessoires },
  ]

  arrayImgToDisplay = this.nosProduitsImg;


  onTypeCollection(label: string){
    // all the other are false
    const indexOld = this.typeCollection.findIndex(item => item.onIt === true);
    if (indexOld !== -1) {
      this.typeCollection[indexOld].onIt = false;
    }
    const indexNew = this.typeCollection.findIndex(item => item.label === label);
    if (indexNew !== -1) {
      this.typeCollection[indexNew].onIt = true;
      if (indexNew === 0) {
        this.mainCarousel = this.carousel0;
        this.mainFirstImg = this.firstImg0;
        this.indexImg = 0;
        this.updateBasedOnWidth(indexNew);
        this.smoothScroll(0);
      } 
      if (indexNew === 1) {
        this.mainCarousel = this.carousel1;
        this.mainFirstImg = this.firstImg1;
        this.indexImg = 0;
        this.updateBasedOnWidth(indexNew);
        this.smoothScroll(0);
      } 
      if (indexNew === 2) {
        this.mainCarousel = this.carousel2;
        this.mainFirstImg = this.firstImg2;
        this.indexImg = 0;
        this.updateBasedOnWidth(indexNew);
        this.smoothScroll(0);
      } 
    }
    
  }
  
  carousel0: any;
  carousel1: any;
  carousel2: any;
  firstImg0: any;
  firstImg1: any;
  firstImg2: any;
  container0: any;
  container1: any;
  container2: any;
  @ViewChild('carousel0') carouselElementRef0!: ElementRef;
  @ViewChild('carousel1') carouselElementRef1!: ElementRef;
  @ViewChild('carousel2') carouselElementRef2!: ElementRef;
  @ViewChild('firstImg0') firstImgElementRef0!: ElementRef;
  @ViewChild('firstImg1') firstImgElementRef1!: ElementRef;
  @ViewChild('firstImg2') firstImgElementRef2!: ElementRef;
  @ViewChild('container0') containerElementRef0!: ElementRef;
  @ViewChild('container1') containerElementRef1!: ElementRef;
  @ViewChild('container2') containerElementRef2!: ElementRef;

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
      if (this.indexImg === this.nosProduitsImg.length-1) return
      if (this.positionDiff > firstImgWidth / 3) {
        // const targetScrollLeft = this.mainCarousel.scrollLeft + valDifference;
        this.indexImg++;
        const targetScrollLeft = firstImgWidth*this.indexImg;
        this.smoothScroll(targetScrollLeft);
      }
      else {
        if (this.indexImg === this.nosProduitsImg.length-1) return
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
    console.log(this.nosProduitsImg.length - 1);
    console.log(this.indexImg);

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
      this.numOfbtn = Array.from({ length:  this.typeCollection[index].array.length }, (_, i) => i + 1);
    } 
    else {
      if (screenWidth < 1024) {
        this.marginRight = 25;
      } else {
        this.marginRight = 40;
      }

      let count =  this.typeCollection[index].array.length - 2;
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
    this.carousel0 = this.carouselElementRef0.nativeElement;
    this.carousel1 = this.carouselElementRef1.nativeElement;
    this.carousel2 = this.carouselElementRef2.nativeElement;
    this.firstImg0 = this.firstImgElementRef0.nativeElement;
    this.firstImg1 = this.firstImgElementRef1.nativeElement;
    this.firstImg2 = this.firstImgElementRef2.nativeElement;
    this.container0 = this.containerElementRef0.nativeElement;
    this.container1 = this.containerElementRef1.nativeElement;
    this.container2 = this.containerElementRef2.nativeElement;
    this.mainCarousel = this.carousel0;
    this.mainContainer = this.container0;
    this.mainFirstImg = this.firstImg0;
  }

}
