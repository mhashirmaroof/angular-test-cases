import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobelService {

  constructor() { }

  autheticate() {
    localStorage.setItem('name', 'M Hashir');
  }

  checkAuthentication() {
    return (localStorage.getItem('name') == 'M Hashir');
  }
}
