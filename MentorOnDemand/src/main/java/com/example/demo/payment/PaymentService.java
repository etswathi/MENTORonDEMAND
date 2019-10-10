package com.example.demo.payment;

import java.util.List;

import com.example.demo.training.Training;

public interface PaymentService {
Payment create(Payment mentor);
Payment delete(int id);
List<Payment> findAll();
Payment findById(int id);
Payment update(Payment mentor);
List<Payment>findOnePaymentmentor(Integer mentorId);
List<Payment> findPaymentByUsersId(Integer usersId);
List<Payment> findPaymentByTrainingIdandUsersId(Integer trainingid, Integer usersId);
List<Payment> findPaymentByMentorId(Integer mentorId);
List<Payment> findPaymentByTrainingIdandMentorId(Integer trainingid, Integer mentorId);


}
