import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-derniere-collection',
  templateUrl: './shop-derniere-collection.component.html',
  styleUrls: ['./shop-derniere-collection.component.css']
})

export class ShopDerniereCollectionComponent implements AfterViewInit {

  constructor(private router: Router) {}

  nosProduitsImg = [
    {imgUrl: '../../../../../assets/images/4_2025.webp', title: 'Maillot Pro 2025', subtitle: 'Dès €80,00'},
    {imgUrl: '../../../../../assets/images/Frontultra.webp' , title: 'Maillot Ultra 2025', subtitle: '€65,00'},
    {imgUrl: '../../../../../assets/images/Marteen_Veste.webp' , title: 'Veste Pro Kit 2025', subtitle: '€90,00'},
    {imgUrl: '../../../../../assets/images/JoggFront2025.webp', title: 'Jogging Pro Kit 2025', subtitle: '€60,00'},
    {imgUrl: '../../../../../assets/images/DUO_LOL_1.webp' , title: 'Précommande - Maillot League Of its Own', subtitle: 'Dès €75,00'},
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
        this.updateBasedOnWidth(indexNew, false);
        this.smoothScroll(0);
      } 
      if (indexNew === 1) {
        this.mainCarousel = this.carousel1;
        this.mainFirstImg = this.firstImg1;
        this.indexImg = 0;
        this.updateBasedOnWidth(indexNew, false);
        this.smoothScroll(0);
      } 
      if (indexNew === 2) {
        this.mainCarousel = this.carousel2;
        this.mainFirstImg = this.firstImg2;
        this.indexImg = 0;
        this.updateBasedOnWidth(indexNew, false);
        this.smoothScroll(0);
      } 
    }
    
  }
  
  carousel0: any;
  carousel1: any;
  carousel2: any;
  firstImg0: any;
  descriptionProduct: any;
  firstImg1: any;
  firstImg2: any;
  container0: any;
  container1: any;
  container2: any;
  @ViewChild('carousel0') carouselElementRef0!: ElementRef;
  @ViewChild('carousel1') carouselElementRef1!: ElementRef;
  @ViewChild('carousel2') carouselElementRef2!: ElementRef;
  @ViewChild('firstImg0') firstImgElementRef0!: ElementRef;
  @ViewChild('descriptionProduct') descriptionProductElementRef0!: ElementRef;
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

  canIClickProduct = true;
  hasPassedThroughMouseMove = false;
  hasPassedThroughMouseDown = false;
  isOnImage = false;

  onMouseMove(e: MouseEvent | TouchEvent) {
    if (this.hasPassedThroughMouseDown) {
      this.hasPassedThroughMouseMove = true;
    }
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
    this.hasPassedThroughMouseDown = true;
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
    let firstImgWidth = this.mainFirstImg.getBoundingClientRect().width + this.marginRight;

    // all the way to the right, don't need to smooth scroll
    if (this.mainCarousel.scrollLeft === (this.mainCarousel.scrollWidth - this.mainCarousel.clientWidth)) {
      const indexFind = this.typeCollection.findIndex(item => item.onIt === true);
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        this.indexImg = this.typeCollection[indexFind].array.length-1
      } 
      else {
        this.indexImg = this.typeCollection[indexFind].array.length-3;
      }
      return;
    } 

    // all the way to the left, don't need to smooth scroll
    if (this.mainCarousel.scrollLeft === 0) {
      this.indexImg = 0;
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
      this.smoothScroll(targetScrollLeft);
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
    this.smoothScroll(targetScrollLeft);
    
  }

  onMouseUp(e: MouseEvent | TouchEvent) {

    this.isDrageStart = false;
    // for the onClick product don't get into conflic with mouse up
    if(!this.hasPassedThroughMouseMove){
      
      if (e instanceof MouseEvent) {
        const rect = this.firstImg0.getBoundingClientRect();
        const rectDescription = this.descriptionProduct.getBoundingClientRect();
        // Get the click position relative to the element. Do that in a case of laptop but not full screen
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        let heightModify = rect.height-rectDescription.height;
        const screenWidth = window.innerWidth;
        if (screenWidth > 1536) {
         heightModify -=45;
        } 
        if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= heightModify && this.indexImg === 0) {
          this.onClickProduct('Maillot Pro 2025');
        }
      }
      

    }
    this.hasPassedThroughMouseMove=false;
    this.hasPassedThroughMouseDown=false;

    if (!this.isDragging) return;
    this.isDragging = false;
    this.autoSlide();
  }

  onMouseleave(e: MouseEvent | TouchEvent) {
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

  updateBasedOnWidth(index: number, isInit: boolean) {
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
    if (!isInit) {
      this.indexImg = 0;
      this.smoothScroll(this.indexImg);
    }
  }

    @HostListener ('window:resize', ['$event'])
    onResize(event: Event): void {
      this.updateBasedOnWidth(0, false);
    }


    onClickProduct(name: string){
      const routerName = name.replace(/ /g, "-");
      this.router.navigate([`/products/${routerName}`]); 
    }

  ngOnInit(): void {
    this.updateBasedOnWidth(0, true)
  }

  onTouchProduct(n:string){
    if (!this.isDragging){
      if (n!=='Maillot Pro 2025') return;
      this.onClickProduct(n)
    }
    
  }


  ngAfterViewInit(): void {
    // this.carousel = document.querySelector(".carousel");
    this.carousel0 = this.carouselElementRef0.nativeElement;
    this.carousel1 = this.carouselElementRef1.nativeElement;
    this.carousel2 = this.carouselElementRef2.nativeElement;
    this.firstImg0 = this.firstImgElementRef0.nativeElement;
    this.descriptionProduct = this.descriptionProductElementRef0.nativeElement;
    this.firstImg1 = this.firstImgElementRef1.nativeElement;
    this.firstImg2 = this.firstImgElementRef2.nativeElement;
    this.container0 = this.containerElementRef0.nativeElement;
    this.container1 = this.containerElementRef1.nativeElement;
    this.container2 = this.containerElementRef2.nativeElement;
    this.mainCarousel = this.carousel0;
    this.mainContainer = this.container0;
    this.mainFirstImg = this.firstImg0;
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
