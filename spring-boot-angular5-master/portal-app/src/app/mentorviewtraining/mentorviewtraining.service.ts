import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';
import { Skill } from '../models/skill.model';
import { Payment } from '../models/payment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorviewtrainingService {
  
  id=sessionStorage.getItem('id')
 
  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8888/trainings';
  private skillUrl = 'http://localhost:8888/skills';
  private  paymentUrl = 'http://localhost:8888/payments';
  
  //private userUrl = '/api';
  
  public getTraining() {
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByMentorId/"+this.id);
  }
  public getSkil(trainingId) {
    
      
    return this.http.get<Skill[]>(this.skillUrl+"/findSkillByTrainingId/"+trainingId);
  }
  public getPayby(trainingId) {
    let id = sessionStorage.getItem('id');
    
        return this.http.get<Payment[]>(this.paymentUrl+"/findPaymentByTrainingIdandMentorId/"+trainingId+"/"+id);
      }
  public getPay() {
    this.id=sessionStorage.getItem('id')
      
    return this.http.get<Payment[]>(this.paymentUrl+"/findPaymentByMentorId/"+this.id);
  }
  
  
  

  public deleteTraining(training) {
    return this.http.delete(this.trainingUrl + "/"+ training.id);
  }

  public createTraining(training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }

}
