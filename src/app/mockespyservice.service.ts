import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockespyserviceService {

  constructor() { }

  public getValue(){
    return "Sample Value";
  }
}
