import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"


@Component({
  selector: 'app-shop-kcorp',
  templateUrl: './shop-kcorp.component.html',
  styleUrls: ['./shop-kcorp.component.css']
})
export class ShopKcorpComponent {

  kc = [
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
    {label: 'kc', link: '../../../assets/images/kcorp.webp'  },
  ]

  @ViewChild("sliderRefKc") sliderRefKc: ElementRef<HTMLElement> | undefined

  slider: any = null;

  ngAfterViewInit() {
    if (this.sliderRefKc) {
      this.slider = new KeenSlider(this.sliderRefKc.nativeElement, {
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
