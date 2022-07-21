import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { GlobelService } from '../globel.service'

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authUser: GlobelService;
  let h4: HTMLElement;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authUser = TestBed.get(GlobelService);
    component = fixture.componentInstance;
    h4 = fixture.nativeElement.querySelector('h4');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert value for "h4" element', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h4.textContent).toBe(component.paySlip)
  })
});
