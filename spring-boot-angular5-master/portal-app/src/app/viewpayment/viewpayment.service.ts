import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Payment } from '../models/payment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ViewpaymentService {
  id=sessionStorage.getItem('id')

  constructor(private http:HttpClient) {}

  private paymentUrl = 'http://localhost:8888/payments';
  //private userUrl = '/api';

  public getPayment() {
    return this.http.get<Payment[]>(this.paymentUrl+"/findOnePaymentmentor/"+this.id);
  }


  
  public deletePayment(payment) {
    return this.http.delete(this.paymentUrl + "/"+ payment.id);
  }

  public createPayment(payment) {
    return this.http.post<Payment>(this.paymentUrl, payment);
  }

}
