import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  sendCartInfo = new Subject<number>();
  isMobileMenu = new Subject<boolean>();

  constructor() { }

  
}
