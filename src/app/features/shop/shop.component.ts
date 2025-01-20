import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
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

  ngOnInit(): void {
    this.updateBasedOnWidth()
  }
}
