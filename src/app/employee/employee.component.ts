import { Component, OnInit } from '@angular/core';
import { GlobelService } from '../globel.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  paySlip:any;

  constructor(private authServices: GlobelService) { 
    this.authServices.autheticate()
  }

  ngOnInit(): void {
  }

  getSalarySlip(){
    if(this.authServices.checkAuthentication()){
      this.paySlip = 'MHashir PAY';
      console.log(this.authServices.checkAuthentication)
    }else {
      this.paySlip = 'Not Authorized';
    }
  }
}
