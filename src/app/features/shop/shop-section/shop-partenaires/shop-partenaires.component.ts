import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"


@Component({
  selector: 'app-shop-partenaires',
  templateUrl: './shop-partenaires.component.html',
  styleUrls: ['./shop-partenaires.component.css']
})
export class ShopPartenairesComponent implements OnInit {

  partenairesValue : any

  partenaires = [
    {label: 'redbull', link: '../../../assets/images/redbull.avif'  },
    {label: 'celio', link: '../../../assets/images/celio.avif'  },
    {label: 'cic', link: '../../../assets/images/cic.jpg'  },
    {label: 'fitness', link: '../../../assets/images/fitness.avif'  },
    {label: 'logitech', link: '../../../assets/images/logitech.avif'  },
    {label: 'michelin', link: '../../../assets/images/michelin.avif'  },
    {label: 'orange', link: '../../../assets/images/orange.avif'  },
    {label: 'quersus', link: '../../../assets/images/quersus.avif'  },
    {label: 'rhino', link: '../../../assets/images/rhino.avif'  },
    {label: 'ultragear', link: '../../../assets/images/ultragear.avif'  },
  ]
  


  updateBasedOnWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      this.partenairesValue = this.partenaires.slice(0,2); 
    } else if (screenWidth < 1024) {
      this.partenairesValue = this.partenaires.slice(0,4); 
    } else {
      this.partenairesValue = this.partenaires.slice(0,6); 
    }
  }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
      this.updateBasedOnWidth();
    }

  ngOnInit(): void {
    this.updateBasedOnWidth()
  }

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | undefined

    slider: any = null;
  
    ngAfterViewInit() {
      if (this.sliderRef) {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          loop: true,
          rtl: false,
          slides: {
            spacing: 10,
          },
          breakpoints: {
            "(max-width: 767px)": {
              slides: {
                perView: 2, // Smaller screens
              },
            },
            "(min-width: 768px)": {
              slides: {
                perView: 4, // Medium screens
              },
            },
            "(min-width: 1024px)": {
              slides: {
                perView: 6, // Larger screens
              },
            },
          },
        }, 
        [
            (slider) => {
            let timeout: any
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ])
      }
    }
  
    ngOnDestroy() {
      if (this.slider) this.slider.destroy()
    }

}
