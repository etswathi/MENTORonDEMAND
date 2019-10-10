import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Payment} from '../models/payment.model';
import { ViewpaymentService } from './viewpayment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {
  payments: Payment[];

  constructor(private router: Router, private paymentService: ViewpaymentService) {

  }

  ngOnInit() {
    this.paymentService.getPayment()
      .subscribe( data => {
        this.payments = data;
      });
  

  
  };


}
