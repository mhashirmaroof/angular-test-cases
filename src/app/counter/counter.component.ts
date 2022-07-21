import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  countClicks:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addClick(){
    this.countClicks ++;
   }

  removeClick(){
    if(this.countClicks != 0)
    this.countClicks --;
  }

  reset(){
    this.countClicks = 0;
  }

}
