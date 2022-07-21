import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debg: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debg = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add click button is clicked', () => {
    let h4 = debg.query(By.css('h4'));
    let addbtn = debg.query(By.css('#addclick'))

    addbtn.triggerEventHandler('click',{});
    fixture.detectChanges();

    expect(component.countClicks).toEqual(parseInt(h4.nativeElement.innerText))
  })
});
