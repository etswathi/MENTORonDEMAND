import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';
import { Payment } from '../models/payment.model';
import { Skill } from '../models/skill.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ViewtrainingService {
  id: string;
  
  start=sessionStorage.getItem('sd')
  end=sessionStorage.getItem('ed')

  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8888/trainings';
  private paymentUrl = 'http://localhost:8888/payments';
  private skillUrl = 'http://localhost:8888/skills';
  
  //private userUrl = '/api';
  
  public getTraining() {
    this.id=sessionStorage.getItem('id')
  
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersId/"+this.id);
  }
  public getPayment() {

this.id=sessionStorage.getItem('id');
  
    return this.http.get<Payment[]>(this.paymentUrl+"/findPaymentByUsersId/"+this.id);
  }

  public getPaymentby(trainingId) {
    let id = sessionStorage.getItem('id');
      
        return this.http.get<Payment[]>(this.paymentUrl+"/findPaymentByTrainingIdandUsersId/"+trainingId+"/"+id);
      }
      public getSkil(trainingId) {
    
      
        return this.http.get<Skill[]>(this.skillUrl+"/findSkillByTrainingId/"+trainingId);
      }
  

  public deleteTraining(training) {
    return this.http.delete(this.trainingUrl + "/"+ training.id);
  }

  public createTraining(training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }
  public enrollUser(training){
    return this.http.put<Training>(this.trainingUrl, training);
  }
  
  
   public getTrainingstartendDate(){
    this.start=sessionStorage.getItem('sd')
    this.end=sessionStorage.getItem('ed')
    return this.http.get<Training[]>(this.trainingUrl + "/findByStartDateBetween/"+ this.start+"/"+this.end);
  }

}
