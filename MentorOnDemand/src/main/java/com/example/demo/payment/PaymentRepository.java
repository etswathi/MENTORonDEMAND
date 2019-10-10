package com.example.demo.payment;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.example.demo.training.Training;

public interface PaymentRepository extends Repository<Payment, Integer>{
	
	void delete(Payment mentor);
	List<Payment> findAll();
	Payment findOne(int id);
	Payment save(Payment mentor);
	@Query("select payment from Payment payment where payment.mentorId=?")
	List<Payment> findOnePaymentmentor(Integer mentorId);
	@Query("select payment from Payment payment where payment.userId=?")
	List<Payment> findPaymentByUsersId(Integer usersId);
	@Query("select payment from Payment payment where payment.trainingId=? and payment.userId=?")
	List<Payment> findPaymentByTrainingIdandUsersId(Integer trainingid,Integer usersId);
	List<Payment> findPaymentByMentorId(Integer mentorId);
	@Query("select payment from Payment payment where payment.trainingId=? and payment.mentorId=?")
	List<Payment> findPaymentByTrainingIdandMentorId(Integer trainingid, Integer mentorId);

}